<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Welcome;

Route::get('/', [Welcome::class, 'welcome']);

Route::post('/register', [UserController::class, 'register']);
