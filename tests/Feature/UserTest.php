<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    protected $user;
    // use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user = factory(\App\User::class)->create();
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
        // dd($user);
        $user_stripe_id = $this->user->stripe_id;

        $this->assertDatabaseHas('users', ['stripe_id' => $user_stripe_id]);
    }

    public function testExistingUserIsCustomer()
    {
        // Delete all users in the user table
        DB::table('users')->truncate();
        // Remove the customer id from this user, then insert this user into the table
        // Check that customer id is not set
        // Since that this customer will have already been created and added to Stripe, query Stripe's customer endpoint
        // Check that the customer exists
        // Add that field to this user
        // Check that the user has the stripe_id property now
    }
}
