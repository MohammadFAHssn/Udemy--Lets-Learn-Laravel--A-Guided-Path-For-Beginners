# 4- Database Basics

## install mysql

mysql.com -> downloads -> MySQL Community(GPL) Downloads -> MySQL Installer for Windows -> Windows MSI installer -> No thanks ... -> install -> click custom -> we only need to install tow things -> MySQL Workbench , MySQL server -> default -> default -> set password for example : routeroute -> next -> default

So at this point, the my SQL server is actually up and running in the background on our computer Now it's just a matter of you and I actually connecting to it so that we can create a new database for laravel to work with

run workbench software I want you to click from this home screen This my SQL connections There should be sort of a starter default one that says local instance, my SQL 80 We can click on that to try to connect to our own local database server And the left hand side, you can see administration is selected. I actually want you to click this item that says schemas instead. And now this is where we can easily create new databases. in this empty area under schemas I want you to right click and click create schema. So schema is just another word for database. name: ourLaravelApp click apply

### through cmd

first we're going to need to add it to the path

```bash
mysql -u root -p
```

: we want to use the root user. but this is going to let us log in or get permission to connect to the server

```bash
show databases;
```

```bash
CREATE DATABASE chem;
```

```bash
exit
```

## connecting laravel to our database

learn how to manage database tables within the context of Laravel I actually want to begin with what we do not want. So what we do not want is to have to manage the database ourselves and to have to manage the database tables by ourselves. we can do these manually but what if we want to start fresh and host this application on a different development computer? You would need to manually replay all of these steps. Also, imagine if you were building an application with three or four other web developers and they add a new feature to the application and it requires you to add a new column to a table.

give Laravel permission to connect to our database server Now, to do that in our Laravel Source code files, you'll see that there's a file named .env: DB_DATABASE=ourLaravelApp and then our username is root, but then our password is routeroute

So remember earlier when I said that, you wouldn't want to have to go in to tables in mySQL and manually create a table and spell out all of the different columns that you'll need. So in the context of Laravel and having Laravel do this for us automatically, this is what we refer to as a migration. Now, Laravel actually has a few migrations by default before you and I even set any up So in your source code, if you look in the database folder and then you can look in the migrations

Now you might be thinking, Hey, I go into workbench and I refresh. I don't see a table called users. Well, that's because we haven't told Laravel to actually run that migration yet.

```bash
php artisan migrate
```

So what this is going to do is Laravel is going to run any and all of these migrations But if I go back into SQL Workbench and click this little icon to refresh. Notice now that under my tables I have all sorts of different tables. I have failed jobs, migrations, password resets, personal access, """pets""", but also users.

Now, what if you and I wanted to make some changes to this So what if instead of this column being name, we wanted it to be username? And what if we wanted to add an entirely new column named Avatar? Well, there are a few different ways. Let's start with the easiest. So back in vscode, jump into that migration file that we were already looking at: The one that ends in Create Users table. in this file change name to username And then let's add a new column named Avatar and it's allowed to be empty. And now what I want to show you right now is that if you just run the command php artisan migrate again,

!!! -> ادامش ننوشتم

```bash
php artisan make:migration create_flights_table
```

## Submit HTML Form Into Database

Well, our first step is to make sure that we know where this form is pointing towards when it gets submitted.

go to welcome.blade.php

```html
<form action="/register" method="POST"></form>
```

this is the URL that the form is going to post to.

But you and I have not created a route yet. go to routes -> web.php

lets create a user controller, So we're going to perform an action that has to do with the concept of a user,
So any time you're doing something related to the user, when you log in, when you log out, it would make sense to organize all of those methods into a controller called a user controller
"php artisan make:controller UserController"

in this controller

```php
public function register(){
    return 'Hello from register function';
}
```

now again go to routes -> web.php

```php
Route::post('/register', [UserController::class, 'register']);
```

if we test -> 419 PAGE EXPIRED, This is a good sign. Laravel does this for our own protection. Essentially, Laravel is protecting us from something called a CSRF attack or a cross-site request forgery

go to welcome.blade.php and after the opening form tag, So just the first line inside the opening form tag just type @csrf. And now if you refresh your home page and view the source, you'll see that there's a hidden input that Laravel created for us And its name is Underscore Token And then it has value.

go to UserController.php

```php
public function register(){
    return 'Hello from register function';
}
```

about the validate method: let's imagine that we just want to say that all of the fields are required. In other words, if you left one of the fields blank, we wouldn't want to actually finish processing this request. We would just want to send the user back to this URL where they submitted the form from originally.

```php
public function register(Request $request){

    $incomingFields = $request->validate([
        "username" => "required",
        "email" => "required",
        "password" => "required",
    ]);

    return 'Hello from register function';
}
```

```php
public function register(Request $request){

    $incomingFields = $request->validate([
        "username" => "required",
        "email" => "required",
        "password" => "required",
    ]);
    User::create($incomingFields);
    return 'Hello from register function';
}
```

$User this is a module. A model also has to do with the database. A model, on the other hand, is how we actually perform CRUD operations on the data that lives in those tables. So a CRUD operation crud stands for create, read, update and delete. A model also is how we define our relationships.

before testing, check you run migration!

توی ستون تیبل یوزر حواست باشه یوزرنیم رو داشته باشی
توی فایل یوزر داخل ماژول هم باید یوزرنیم باشه

## validation

in UserController.php:

```php
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

```

Now, in order for the confirmed to work, open up your view file

```html
<label>confirm password</label>
<input name="password_conformation"></input>
```

password is hashed automatically by Laravel but:

```php
$incomingFields['password'] = bcrypt($incomingFields['password']);
```

!!! hashing process

Let's actually work on displaying, So if you filled out the form incorrectly, right we should actually display the error messages

go to welcome.blade.php

```php
<label>username</label>
<input name="username"></input>
@error('username')
    <p>{{ $message }}</p>
@enderror
```

Now let's take it one step further. You might know from various websites it's super frustrating when you fill out a form and you know it takes you a good minute to fill it out and then you lose all of your values that weren't problematic. So imagine you only had the password error, but now you have to retype in your username and email. That's super annoying.

so in the homepage.blade.php

```php
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <form action = "/register" method="POST">
        @csrf
        <label>username</label>
        <input value="{{old('username')}}" name="username"></input>
        @error('username')
            <p>{{ $message }}</p>
        @enderror

        <label>email</label>
        <input value="{{old('email')}}" name="email"></input>
        @error('email')
            <p>{{ $message }}</p>
        @enderror

        <label>passowrd</label>
        <input name="password"></input>
        @error('password')
            <p>{{ $message }}</p>
        @enderror

        <label>confirm password</label>
        <input name="password_confirmation"></input>
        @error('password_confirmation')
            <p>{{ $message }}</p>
        @enderror

        <button>sign up</button>
    </form>
</body>

</html>

```
