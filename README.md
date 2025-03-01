# Udemy - Let's Learn Laravel A Guided Path For Beginners 2023

## Migration

instead of

```php
$table->foreignId('user_id');
```

<img src="./images/migration.png" style="border: 1px solid white; width: 600px"/>

## Middleware

Path: \bootstrap\app.php

<img src="./images/image.png" style="border: 1px solid white"/>

```bash
php artisan make:middleware MiddleWareName
```

<img src="./images/image-1.png" style="border: 1px solid white"/>

<img src="./images/image-2.png" style="border: 1px solid white"/>

## Policy

Path: app/policies

```bash
php artisan make:policy ModelNamePolicy –-model=ModelName
```

<img src="./images/image-3.png" style="border: 1px solid white"/>

<img src="./images/image-4.png" style="border: 1px solid white"/>

<img src="./images/image-5.png" style="border: 1px solid white"/>

<img src="./images/image-6.png" style="border: 1px solid white"/>

## Moderator and gate

Path: app/policies

<img src="./images/image-7.png" style="border: 1px solid white"/>

## Gate

Path: app/providers/AuthServiceProvider

<img src="./images/image-8.png" style="border: 1px solid white"/>

<img src="./images/image-9.png" style="border: 1px solid white"/>

<img src="./images/image-10.png" style="border: 1px solid white"/>

## Request

<img src="./images/image-11.png" style="border: 1px solid white"/>

## php basics

<img src="./images/image-12.png" style="border: 1px solid white"/>

## Register

<img src="./images/image-13.png" style="border: 1px solid white"/>

## Log in

<img src="./images/image-14.png" style="border: 1px solid white"/>

<img src="./images/image-15.png" style="border: 1px solid white"/>

## Log out

<img src="./images/image-16.png" style="border: 1px solid white"/>

## Repository

```php
Auth()->user()->username or id
```

<img src="./images/image-17.png" style="border: 1px solid white"/>

<img src="./images/image-18.png" style="border: 1px solid white"/>

<img src="./images/image-19.png" style="border: 1px solid white"/>

<img src="./images/image-20.png" style="border: 1px solid white"/>

```php
$user -> delete()
$user -> update($incomingFields)
```

---

<img src="./images/repository.png" style="border: 1px solid white; width: 450px"/>

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

---

## models

<img src="./images/accessor.png" style="border: 1px solid white"/>

## Relations

<img src="./images/image-21.png" style="border: 1px solid white"/>

<img src="./images/image-22.png" style="border: 1px solid white"/>

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
