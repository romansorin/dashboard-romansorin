<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Http\Controllers\Auth\RegisterController;
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
        $data = [
            'firstName' => $this->faker->firstName,
            'lastName' => $this->faker->lastName,
            'username' => $this->faker->userName,
            'email' => $this->faker->email,
            'password' => $this->faker->password
        ];

        $register = new RegisterController();
        $register->create($data);

        $this->assertDatabaseHas('users', $data);
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
