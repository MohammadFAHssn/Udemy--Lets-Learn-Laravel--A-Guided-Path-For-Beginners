<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ExampleController;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/about', function () {
    return '<h1>About Page</h1><a href="/">back to home page</a>';
});

/*
for the second argument we would want to
point towards this home page method that belongs to our example controller
Now it's important to point out that we don't
want to immediately call or execute that function
We're just telling Laravel, Hey, this is where the function lives
Now, in PHP, in order to provide a callable reference to a function like that
*/
Route::get('/', [ExampleController::class, 'homePage']);
