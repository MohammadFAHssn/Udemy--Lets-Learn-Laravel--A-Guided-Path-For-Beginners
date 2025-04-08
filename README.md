# Udemy - Let's Learn Laravel A Guided Path For Beginners 2023

## Commands

```bash
php artisan serve --host=somedomain.com --port=8001
```

---

## Migration

instead of

```php
$table->foreignId('user_id');
```

<img src="./images/migration.png" style="border: 1px solid white; width: 600px; display: block;" />

## Seeder

```php
DB::table('users')->insert([
    'id' => 1,
    'username' => 'brad',
    'email' => 'brad@local',
    'password' => Hash::make('qwertyqwerty'), // pay attention to this
    'isAdmin' => 1
]);

```

## Middleware

Path: \bootstrap\app.php

<img src="./images/image.png" style="border: 1px solid white; display: block;" />

```bash
php artisan make:middleware MiddleWareName
```

<img src="./images/image-1.png" style="border: 1px solid white; display: block;" />

<img src="./images/image-2.png" style="border: 1px solid white; display: block;" />

## Policy

Path: app/policies

```bash
php artisan make:policy ModelNamePolicy –-model=ModelName
```

<img src="./images/image-3.png" style="border: 1px solid white; display: block;" />

<img src="./images/image-4.png" style="border: 1px solid white; display: block;" />

<img src="./images/image-5.png" style="border: 1px solid white; display: block;" />

<img src="./images/image-6.png" style="border: 1px solid white; display: block;" />

## Moderator and gate

Path: app/policies

<img src="./images/image-7.png" style="border: 1px solid white; display: block;" />

## Gate

Path: app/providers/AuthServiceProvider

<img src="./images/image-8.png" style="border: 1px solid white; display: block;" />

<img src="./images/image-9.png" style="border: 1px solid white; display: block;" />

<img src="./images/image-10.png" style="border: 1px solid white; display: block;" />

## Request

<img src="./images/image-11.png" style="border: 1px solid white; display: block;" />

## php basics

<img src="./images/image-12.png" style="border: 1px solid white; display: block;" />

## Register

<img src="./images/image-13.png" style="border: 1px solid white; display: block;" />

## Log in

<img src="./images/image-14.png" style="border: 1px solid white; display: block;" />

<img src="./images/image-15.png" style="border: 1px solid white; display: block;" />

## Log out

<img src="./images/image-16.png" style="border: 1px solid white; display: block;" />

## Repository

```php
Auth()->user()->username or id
```

<img src="./images/image-17.png" style="border: 1px solid white; display: block;" />

<img src="./images/image-18.png" style="border: 1px solid white; display: block;" />

<img src="./images/image-19.png" style="border: 1px solid white; display: block;" />

<img src="./images/image-20.png" style="border: 1px solid white; display: block;" />

```php
$user -> delete()
$user -> update($incomingFields)
```

---

<img src="./images/repository.png" style="border: 1px solid white; width: 450px; display: block;" />

Let's say in your user table you have a field that is user_type and that can have values of user / admin

Obviously, you don't want users to be able to update this value. someone could inject into a form a new field for user_type and send 'admin' along with the other form data, and easily switch their account to an admin account... bad news.

By adding:

```php
$fillable = ['name', 'password', 'email'];
```

You are ensuring that only those values can be updated using mass assignment

To be able to update the user_type value, you need to explicitly set it on the model and save it, like this:

```php
$user->user_type = 'admin';
$user->save();
```

---

```php
$existCheck = Follow::where(some query)->count(); // pay attention to count!
```

> ```php
> $user->isEmpty(); // pay attention to isEmpty()!
> ```

> <img src="./images/load-instead-of-with.png" style="border: 1px solid white; width: 500px; display: block;" />

## models

<img src="./images/accessor.png" style="border: 1px solid white; display: block;" />
<img src="./images/hasManyThrough-2.png" style="border: 1px solid black; width: 1000px; display: block;" />
<img src="./images/hasManyThrough.png" style="border: 1px solid black; width: 1000px; display: block;" />

## Relations

<img src="./images/image-21.png" style="border: 1px solid black; display: block;" />

<img src="./images/image-22.png" style="border: 1px solid black; display: block;" />

## Search

show us all blog posts that contain the word "Brad". we're not saying, only show us posts where the entire value for the title column is literally nothing but the word "Brad", We're trying to say if the value in there if at any point it contains the word "Brad" inside it. Now, there are many different ways to accomplish this

<img src="./images/search-url.png" style="border: 1px solid white; width: 250px; display: block;" />

```bash
composer require laravel/scout
```

> ```bash
> php artisan vendor:publish --provider="Laravel\Scout\ScoutServiceProvider"
> ```
>
> Laravel will look for any publishable resources (such as configuration files, views, assets, translations, or migrations) that have been tagged by the service provider named "SomeThing" and copy them from the package’s directory into your application. This allows you to customize and override package resources in your own project without modifying the package’s source code. Essentially, it "publishes" the package’s files into your app’s directory structure, making them accessible for further development or customization.

<img src="./images/search.png" style="border: 1px solid white; width: 250px; display: block;" />
<img src="./images/search-2.png" style="border: 1px solid white; width: 500px; display: block;" />

> in .env file:
> <img src="./images/search-3.png" style="border: 1px solid white; width: 250px; display: block;" />
> this is one of the search solutions and we have more: algolia and ...

<img src="./images/search-4.png" style="border: 1px solid white; width: 500px; display: block;" />

## Events and listeners

<img src="./images/events-listeners.png" style="border: 1px solid white; width: 700px; display: block;" />
<img src="./images/events-listeners-2.png" style="border: 1px solid white; width: 500px; display: block;" />

```bash
php artisan event:generate
```

<img src="./images/events-listeners-3.png" style="border: 1px solid white; width: 700px; display: block;" />
<img src="./images/events-listeners-4.png" style="border: 1px solid white; width: 700px; display: block;" />
<img src="./images/events-listeners-5.png" style="border: 1px solid white; width: 800px; display: block;" />

## Tips

```php
Log::info
```

```bash
php artisan cache:forget spatie.permission.cache
```

```bash
php artisan optimize:clear
php artisan optimize
php artisan clear-compiled
php artisan config:cache
php artisan route:cache
php artisan view:cache
composer dump-autoload
npm cache clean --force
```
