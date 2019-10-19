<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Http\Controllers\StripeCustomerController;
use Tests\TestCase;

class StripeCustomerTest extends TestCase
{
    use WithFaker;

    /**
     * Check whether or not customer exists and appropriate response
     *
     * @return void
     */
    public function testCustomerStatusCheck()
    {
        $exists = true;
        $existing_email = env('STRIPE_EXISTING_TEST_EMAIL');
        $existing_customer_id = env('STRIPE_EXISTING_TEST_ID');
        $controller = new StripeCustomerController();

        $response = $exists ? $controller->checkCustomerStatus($existing_email) : $controller->checkCustomerStatus($this->faker->email);

        $exists ? $this->assertEquals($response, $existing_customer_id) : $this->assertNull($response);
    }
}
