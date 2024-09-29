<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Route::get('/', [Welcome::class, 'welcome']);
// Route::get('/', [UserController::class, 'correctWelcome']);
// Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login'])->middleware('guest');
Route::post('/logout', [UserController::class, 'logout'])->middleware('auth');

// Route::get('/create-post', [PostController::class, 'showCreateForm']);
Route::post('/create-post', [PostController::class, 'storeNewPost'])->middleware('auth');
// Route::get('/post/{postId}', [PostController::class, 'viewSinglePost'])->middleware('auth');
// agar man dar browser vared kardam "/post/4" meghdari ke inja gharar migirad hamin ast

Route::get('/create-post', [PostController::class, 'showCreateForm'])->middleware('auth');
// for get rid of the error, because you and I have not named(label) one of our routes as "login" yet
Route::get('/', [UserController::class, 'correctWelcome'])->name('login');
Route::post('/register', [UserController::class, 'register'])->middleware('guest');
Route::get('/post/{postId}', [PostController::class, 'viewSinglePost'])->middleware('mustBeLoggedIn');

Route::get('/profile/{user:username}', [UserController::class, 'profile']);
//  When Laravel is going to look up something in the database for you like this
// by default, it's going to try to look it up based on its ID number
// However, we're not giving it an ID number, right
// hear 'user:username' -> looking up based upon the username

Route::delete('/post/{post}', [PostController::class, 'delete']);
Route::delete('/post/{post}', [PostController::class, 'delete'])->middleware('can:delete, post'); ???

Route::get('/post/{post}/edit', [PostController::class, 'showEditForm']);
Route::put('/post/{post}', [PostController::class, 'edit']);