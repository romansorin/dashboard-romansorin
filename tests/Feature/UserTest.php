<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    protected $user;
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $this->user = factory(\App\User::class)->create();
        $this->testNewUserBecomesCustomer();
    }

    /**
     * A basic unit test example.
     *
     * @return void
     */
    // public function testUserCanRegister()
    // {
    //     // will become api test
    // }

    public function testNewUserBecomesCustomer()
    {
        $this->user->createAsStripeCustomer();
        $user_stripe_id = $this->user->stripe_id;

        $this->assertDatabaseHas('users', ['stripe_id' => $user_stripe_id]);
    }

    public function testExistingUserIsCustomer()
    {
        $prev_id = $this->user->stripe_id;
        \DB::table('users')->where('stripe_id', $prev_id)->update(['stripe_id' => '']);
        $this->assertDatabaseMissing('users', ['stripe_id' => $prev_id]);

        $response = \Stripe\Customer::all(['email' => $this->user->email]);
        $this->assertGreaterThan(0, sizeof($response->data));
        \DB::table('users')->where('email', $this->user->email)->update(['stripe_id' => $response->data[0]->id]);

        $this->assertDatabaseHas('users', ['stripe_id' => $prev_id]);
        $this->assertEquals($prev_id, $response->data[0]->id);
    }
}
