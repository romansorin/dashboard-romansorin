<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe;

class StripeCustomerController extends Controller
{

    public static function checkCustomerStatus($email)
    {
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $response = Stripe\Customer::all(['email' => $email]);

        if (sizeof($response->data) > 0) {
            return $response->data[0]->id;
        } else {
            return null;
        }
    }

    public static function getCustomerInvoices(Request $request)
    {
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

        $response = Stripe\Invoice::all(['customer' => $request->customer_id]);

        return $response;
    }
}
