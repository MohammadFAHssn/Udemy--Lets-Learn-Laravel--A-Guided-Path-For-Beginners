<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    // public function register(){
    //     return 'Hello from register function';
    // }

    public function correctWelcome()
    {
        if (auth()->check()) {
            return view('welcome-feed');
        } else {
            return view('welcome');
        }
    }

    public function register(Request $request)
    {

        $incomingFields = $request->validate([
            'username' => ['required', 'min:3', 'max:20', Rule::unique('users', 'username')],
            // in unique, Laravel will look in our database
            'email' => ['required', 'email', Rule::unique('users', 'email')],
            'password' => ['required', 'min:8', 'confirmed'],
            // this is how Laravel can automatically make sure that password and confirm password are match.
        ]);
        // User::create($incomingFields);
        // This is actually going to return that user
        $user = User::create($incomingFields);
        auth()->login($user);
        return redirect('/')->with('success', 'Thanks for registering');
    }

    public function login(Request $request)
    {
        $incomingFields = $request->validate([
            'loginUsername' => 'required',
            'loginPassword' => 'required',
        ]);

        if (auth()->attempt(['username' => $incomingFields['loginUsername'], 'password' => $incomingFields['loginPassword']])) {
            // the Model and the table and related things must have username and password!
            $request->session()->regenerate();

            // return 'login successful!';
            return redirect('/')->with('success', 'You have successfully logged in');
            // The first argument we get to make up a name for this type of message
        } else {
            return redirect('/')->with('failed', 'your username or password is incorrect');
        }
        // to understand the table class name, go to auth in config folder and check providers
        // auth returns an object
    }

    public function logout()
    {
        auth()->logout();
        return 'logout successful!';
    }

    public function logout()
    {
        auth()->logout();
        return redirect('/')->with('success', 'You are now logged out');
    }
}

