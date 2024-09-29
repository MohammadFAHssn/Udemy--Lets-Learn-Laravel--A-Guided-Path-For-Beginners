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

    public function register(Request $request)
    {

        $incomingFields = $request->validate([
            'username' => ['required', 'min:3', 'max:20', Rule::unique('users', 'username')],
            // in unique, Laravel will look in our database
            'email' => ['required', 'email', Rule::unique('users','email')],
            'password' => ['required', 'min:8', 'confirmed'],
            // this is how Laravel can automatically make sure that password and confirm password are match.
        ]);
        User::create($incomingFields);
        return 'Hello from register function';
    }
}
