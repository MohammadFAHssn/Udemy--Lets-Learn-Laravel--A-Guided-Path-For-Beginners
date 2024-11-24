# Udemy - Let's Learn Laravel A Guided Path For Beginners 2023

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

```
php artisan optimize:clear
php artisan optimize
php artisan clear-compiled
php artisan config:cache
php artisan route:cache
composer dump-autoload
php artisan view:cache
npm cache clean --force

```
