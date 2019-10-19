<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase, WithFaker;
    protected $user;

    protected function setUp(): void
    {
        // TODO: Separate these cases into different methods
        parent::setUp();
        $this->user = factory(\App\User::class)->create();
    }

    /**
     * Tests that an existing user can login through login API endpoint and successfully redirected
     *
     * @return void
     */
    public function testUserCanLogin()
    {
        $response = $this->json('POST', '/api/v1/login', ['username' => $this->user->username, 'password' => 'password']);
        $response->assertStatus(302);
    }

    /**
     * Tests both registration cases where user is already Stripe customer, and where user is not (create new Stripe customer or update info based on existing customer)
     *
     * @return void
     */
    public function testUserRegistrationFlow()
    {
        // Set exists to true if the Stripe customer exists and modify email accordingly
        $exists = true;
        $existing_email = env('STRIPE_EXISTING_TEST_EMAIL');

        $user = factory(\App\User::class)->make();
        $user_arr = [
            'firstName' => $user->firstName,
            'lastName' => $user->lastName,
            'username' => $user->username,
            'password' => $user->password,
            'password_confirmation' => $user->password,
            'stripe_id' => $user->stripe_id
        ];

        if ($exists) $user_arr['email']  = $existing_email;
        else $user_arr['email'] = $user->email;

        $response = $this->json('POST', '/api/v1/register', $user_arr);

        $response->assertStatus(302);
        $this->assertDatabaseHas('users', ['username' => $user_arr['username']]);
    }
}
