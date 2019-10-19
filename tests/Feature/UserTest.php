<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    protected $user;
    use RefreshDatabase, WithFaker;

    protected function setUp(): void
    {
        parent::setUp();
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $this->user = factory(\App\User::class)->create();
        $this->testNewUserBecomesCustomer();

        // Pre-existing user example; assumes RefreshDatabase is not being used
        // $this->user = \DB::table('users')->where('email', 'ashlynn.koelpin@example.net')->first();
    }

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testUserCanRegister()
    {
        $user = factory(\App\User::class)->make();
        $user_arr = [
            'firstName' => $user->firstName,
            'lastName' => $user->lastName,
            'username' => $user->username,
            'email' => $user->email,
            'password' => $user->password
        ];
        dump($user_arr);
        $response = $this->json('POST', '/register', $user_arr);

        $response->assertStatus(302);
        $this->assertDatabaseHas('users', ['username' => $user_arr['username']]);
    }

    public function testNewUserBecomesCustomer()
    {
        $this->user->createAsStripeCustomer();
        $user_stripe_id = $this->user->stripe_id;

        $this->assertDatabaseHas('users', ['stripe_id' => $user_stripe_id]);
    }

    public function testExistingUserIsCustomer()
    {
        // Case where we're not already using a pre-existing user
        if ($this->user->stripe_id !== '') {
            $prev_id = $this->user->stripe_id;
            \DB::table('users')->where('stripe_id', $prev_id)->update(['stripe_id' => '']);
            $this->assertDatabaseMissing('users', ['stripe_id' => $prev_id]);
        }

        $response = \Stripe\Customer::all(['email' => $this->user->email]);
        $this->assertGreaterThan(0, sizeof($response->data));
        \DB::table('users')->where('email', $this->user->email)->update(['stripe_id' => $response->data[0]->id]);

        $prev_id ? null : $prev_id = $response->data[0]->id;

        $this->assertDatabaseHas('users', ['stripe_id' => $prev_id]);
        $this->assertEquals($prev_id, $response->data[0]->id);
    }
}
