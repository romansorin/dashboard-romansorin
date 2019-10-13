<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class StripeCustomerTest extends TestCase
{
    /**
     * Test that a customer is successfully created and associated with a model.
     *
     * @return void
     */
    public function testCustomerIsCreated()
    {
        $user = factory(\App\User::class)->make();

        $customer = $user->createAsStripeCustomer();

        $customer_id = $customer->id;

        $this->assertDatabaseHas('users', [
            'stripe_id' => $customer_id
        ]);
    }
}
