# 2- Laravel-Introduction

## set up a project

open terminal and type

```bash
composer create-project laravel/laravel ourFirstProject
```

So we start with the name of the author or the name of the organization, and then slash the name of actual project And then finally, we just think up a new name for the folder that will contain this project

## import form github

you'll notice that most lessons from this point forward will contain a downloadable resource zip reference file. Each one of these zip files contains my Laravel project folder with the working example code (the way that my code was at the end of each video lesson). You can use these files to compare your code to, or to spin up a working example on your own computer.

However, please note that these downloadable zip files do not contain any of the files that a default Laravel project would exclude from a git repository. In other words, after you extract the zip file, if you wanted to "cd" into that new folder and run

```bash
php artisan serve
```

you'd need to first run the command of

```bash
composer install
```

to install all of the dependencies.

Also, the downloadable zip files do not contain a ".env" file because that file will contain sensitive information that's specific to your accounts, so it wouldn't make sense for me to share mine. In order to be able to successfully run "php artisan serve" in the zip folder, you'd need to duplicate / copy over your ".env" file from your actual "ourmainapp" folder that we are building together in the video lessons. That way it will have your specific values that are unique for you.

## Routes and URLs

in routes folder -> web.php:

```php
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

```

So this file is where you and I spell out all of the different routes or URLs or pages that we want our website or application to have

So by default, a brand new empty Laravel project just has this one home page root that we see down here

so Route is a laravel class
???
So Laravel sees that it already had this line of code where we're trying to use this namespace Laravel is going to automatically import all of the files that we need

And then in PHP, if you say colon, colon you can call a static function or method within that class

it's a best practice to house these functions that we're going to call in a separate file entirely The question is, well, what would we call that separate file The answer is that it's a controller

## controller

So right now let's create our first controller We actually do this through the command line:

```hash
php artisan make:controller ExampleController
```

And now if you look inside the app folder and then look inside the HTTP folder, look inside the controllers

ExampleController:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExampleController extends Controller
{
    // public function homePage()
    // {
    //     return 'this is home page!';
    // }

    public function aboutPage()
    {
        return 'this is about page!';
    }

    public function homePage()
    {
        // globally helper function
        // return view('homePage');


        /*
        imagine we loaded dada from database
        So any sort of complexity, any sort of
        data loading should be going on in the controller
        */
        $ourName = 'Moha';

        $persons = ['me', 'Esra', 'mamy'];

        // associative array
        return view('homePage', ['persons' => $persons, 'name' => $ourName, 'catName' => 'MeowsALot']);
    }
}

```

## view and blade template engine

resources -> views
create a file called homePage.blade.php

```php
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Hello, This is a blade template</h1>

    <p>A great number is {{ 2 + 2 }}</p>

    <p>The current year is {{ date('Y') }}</p>

    <p>Ok, This is {{$name}} and {{$catName}}</p>

    <ul>
        @foreach($persons as $person)
            <li>{{$person}}</li>
        @endforeach
    </ul>
    <P>These are directivea in blade!!!</P>
</body>

</html>

```

and to use this template file for our home page: go into controller

Now the main concept here before we move forward is just this idea of separation of concerns the controller is like a project manager it delegates specialty responsibilities to other team members to get the job done. So, for example, our home page method, we might perform all sorts of top level tasks like loading data from a database, so on and so forth, making different decisions But then we're ultimately delegating the responsibility of the view or the template the visitor sees to the view engine The View is not responsible for making top level decisions The view is not responsible for querying data The view is supposed to be very simple We don't want to do anything very complex in the view Now, yes, we did perform a little bit of dynamic action here by saying two plus two or outputting the current year That's okay But any sort of real complexity, like querying the database for something very, very specific or you know, checking to see if the current user is the author of a certain blog post, so on and so forth That should not be done in the View

passing a bit of data from the controller into The View So any sort of complexity, any sort of data asking the database for data, making decisions, checking permissions so on and so forth
