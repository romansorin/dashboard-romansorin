<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    use WithFaker;
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

    public function testUserRegistrationFlow()
    {
        $exists = true;
        $user = factory(\App\User::class)->make();

        $user_arr = [
            'firstName' => $user->firstName,
            'lastName' => $user->lastName,
            'username' => $user->username,
            'password' => $user->password,
            'stripe_id' => $user->stripe_id
        ];

        if ($exists) $user_arr['email']  = 'test@romansorin.com';
        else $user_arr['email'] = $user->email;

        $response = $this->json('POST', '/api/v1/register', $user_arr);

        $response->assertStatus(302);
        $this->assertDatabaseHas('users', ['username' => $user_arr['username']]);
    }
}
