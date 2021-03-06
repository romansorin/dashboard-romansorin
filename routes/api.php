<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v1')->group(function () {
    Auth::routes();

    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('/invoices', 'StripeCustomerController@getCustomerInvoices');

        Route::get('/user', function (Request $request) {
            return $request->user();
        });
    });
});
