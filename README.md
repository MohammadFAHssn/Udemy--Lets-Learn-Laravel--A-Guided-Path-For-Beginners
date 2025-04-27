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

### query scopes

https://laravel.com/docs/11.x/eloquent#query-scopes

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

## Chat - Broadcasting

## Email - Sending Email

## Adding jobs to the Queue (Async)

```bash
php artisan make:job SendNewPostEmail
```

> <img src="./images/job.png" style="border: 1px solid white; width: 600px; display: block;" />
> essentially in this job file This is where we would want to send the email, not in our post controller

<img src="./images/job-2.png" style="border: 1px solid white; width: 600px; display: block;" />

> <img src="./images/job-3.png" style="border: 1px solid white; width: 800px; display: block;" />
> don't forget:
>
> ```php
> public $incoming;
> ```

<img src="./images/job-4.png" style="border: 1px solid white; width: 400px; display: block;" />

<img src="./images/job-5.png" style="border: 1px solid white; width: 600px; display: block;" />

> ```bash
> php artisan queue:work
> ```
>
> If you don't have that task up and running, Laravel is just going to keep adding new jobs to the queue

## Scheduling tasks

<img src="./images/scheduling-tasks.png" style="border: 1px solid white; width: 700px; display: block;" />
<img src="./images/scheduling-tasks-2.png" style="border: 1px solid black; width: 600px; display: block;" />

```bash
php artisan schedule:work
```

## Cache

What if that was a complex or expensive or slow query to run. The idea is that every single time someone refreshes the home page, we would not want to have to run that query again and again and again
<img src="./images/cache.png" style="border: 1px solid black; width: 600px; display: block;" />
How long do you want it to stay in the cache?
<img src="./images/cache-2.png" style="border: 1px solid black; width: 600px; display: block;" />
if you're retrieving data from some sort of third party API where it's going to require a network request on your end

## API Authentication

## Going Live Practice

VPS let you set up a brand new fresh Linux box that you are in 100% complete control over.

Now, you might be saying though, Brad that's cool, but I don't want to learn about Linux and the command line and how to SSH into a machine and a server. there's a great option and it's the official Laravel option called Forge So with Forge, you would still have to connect your Laravel Forge account to your digital ocean(vps) account But the idea is that Laravel Forge, the official Laravel Solution, it will connect to those services and it will provision and create a Linux server from scratch So it will set up everything for you It will create the perfect environment, and then you just push your Laravel source code files up and the rest is taken care of for you.

### Docker

**this is not how you would ever use Docker quote, in the real world.** And I'm purposely going to go against all of the Docker best practices. So we're going to break all of those Docker best practices. **We're going to use our imagination that our Docker container is a VPS server**

when it comes time to actually host your application for real on a public server somewhere, well, you wouldn't just run `PHP artisan serve` You would want to set up a real web host that just hosts your application by default without you running any commands.

in terminal command this:

> ```bash
> docker run -dit -p 80:80 ubuntu:24.04
> ```
>
> - -d (detached mode): Runs the container in the background, allowing you to continue using the terminal.
>
> - The combination of -i and -t (-it) is commonly used to interact with containers via the command line. port 80 in our container is available as port 80 on our host machine. This means that any network traffic sent to port 80 on the host will be directed to port 80 in the container.

go into the docker desktop application. And now if you click on images in the left hand sidebar ...

But better yet, if you click on containers in the left hand sidebar. So what we want to do now is just open a command line interface for this container. So what I like to do is to just click on the name. Well, then you can click terminal here. Or better yet, I like to use this option here that says open an external terminal.

let's install a web server. I'm a big fan of the web server that's called nginx, so you can do this with me

```bash
sudo apt update
sudo apt install nginx
```

Now, if we were on a real actual Linux computer nginx would start up automatically. But because we're in a Docker container So we need to go manually start up our web server

```bash
/etc/init.d/nginx start #init.d folder and nginx command
```

<img src="./images/nginx.png" style="border: 1px solid red; width: 700px; display: block;" />

This is just the default welcome or starter site that's being hosted, we can create a new site for nginx to host

now we want ot install some necessary tools:
php:
Shouldn't we install PHP itself???

> <img src="./images/install-php.png" style="border: 1px solid white; width: 900px; display: block;" />
>
> - php-cli: run php code in command line interface
> - php8.1-gd: This is a graphics library that's used for when we resize avatar image uploads
> - FPM (FastCGI Process Manager) is a primary PHP FastCGI implementation containing some features (mostly) useful for heavy-loaded sites.

install composer ...

install mysql ...
if we were using a real actual Linux VPS, mySQL would just start automatically anytime you reboot the system

```bash
/etc/init.d/mysql start
```

moving our source code files onto out VPS(docker container): open up the windows command line

in docker:

```bash
docker cp /User/brad/Desktop/laravel-projects/ourmainapp cranky_franklin:/var/www/ourapp #cranky_franklin: our container name
```

> <img src="./images/copy-files-to-docker.png" style="border: 1px solid white; width: 900px; display: block;" />
> you can see that nginx by default has an HTML folder that is what contains the files for this default Welcome to nginx project

So what we need to do now is simply, instead of just serving up this default website, we want nginx to serve up our new files. We want to serve the "public" folder.

## spatie/laravel-permission



```php
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

$role = Role::create(['name' => 'writer']);
$permission = Permission::create(['name' => 'edit articles']);
```

Assign A Permission To A Role:
```php
$role->givePermissionTo($permission);
$permission->assignRole($role);
```

Sync Permissions To A Role:
Multiple permissions:
```php
$role->syncPermissions($permissions);
$permission->syncRoles($roles);
```

Remove Permission From A Role:
```php
$role->revokePermissionTo($permission);
$permission->removeRole($role);
```

```php
// get a list of all permissions directly assigned to the user
$permissionNames = $user->getPermissionNames(); // collection of name strings
$permissions = $user->permissions; // collection of permission objects

// get all permissions for the user, either directly, or from roles, or from both
$permissions = $user->getDirectPermissions();
$permissions = $user->getPermissionsViaRoles();
$permissions = $user->getAllPermissions();

// get the names of the user's roles
$roles = $user->getRoleNames(); // Returns a collection
```

The role and withoutRole scopes can accept a string, a `\Spatie\Permission\Models\Role` object or an `\Illuminate\Support\Collection` object:
```php
$users = User::role('writer')->get(); // Returns only users with the role 'writer'
$nonEditors = User::withoutRole('editor')->get(); // Returns only users without the role 'editor'
```

The scope can accept a string, a `\Spatie\Permission\Models\Permission` object or an `\Illuminate\Support\Collection` object:
```php
$users = User::permission('edit articles')->get(); // Returns only users with the permission 'edit articles' (inherited or directly)
$usersWhoCannotEditArticles = User::withoutPermission('edit articles')->get(); // Returns all users without the permission 'edit articles' (inherited or directly)
```


```php
$allUsersWithAllTheirRoles = User::with('roles')->get();
$allUsersWithAllTheirDirectPermissions = User::with('permissions')->get();
$allRolesInDatabase = Role::all()->pluck('name');
$usersWithoutAnyRoles = User::doesntHave('roles')->get();
$allRolesExceptAandB = Role::whereNotIn('name', ['role A', 'role B'])->get();
```

```php
$user->givePermissionTo('edit articles');

// You can also give multiple permission at once
$user->givePermissionTo('edit articles', 'delete articles');

// You may also pass an array
$user->givePermissionTo(['edit articles', 'delete articles']);
```

```php
$user->revokePermissionTo('edit articles');
```

Or revoke & add new permissions in one go:
```php
$user->syncPermissions(['edit articles', 'delete articles']);
```

This will also allow you to use Super-Admin features provided by Laravel's Gate:

```php
$user->can('edit articles');
```

NOTE: The following hasPermissionTo, hasAnyPermission, hasAllPermissions functions do not support Super-Admin functionality. Use can, canAny, canAll instead.

```php
$user->hasPermissionTo('edit articles');
```

Or you may pass an integer representing the permission id

```php
$user->hasPermissionTo('1');
```

```php
$user->hasAnyPermission(['edit articles', 'publish articles', 'unpublish articles']);
```

```php
$user->hasAllPermissions(['edit articles', 'publish articles', 'unpublish articles']);
```

You may also pass integers to lookup by permission id

```php
$user->hasAnyPermission(['edit articles', 1, 5]);
```

```php
$user->assignRole('writer');
$user->assignRole('writer', 'admin');
$user->assignRole(['writer', 'admin']);
```

```php
$user->removeRole('writer');
```

```php
// All current roles will be removed from the user and replaced by the array given
$user->syncRoles(['writer', 'admin']);
```

```php
$user->hasRole('writer');

// or at least one role from an array of roles:
$user->hasRole(['editor', 'moderator']);

$user->hasAnyRole(['writer', 'reader']);
// or
$user->hasAnyRole('writer', 'reader');

$user->hasAllRoles(Role::all());

$user->hasExactRoles(Role::all()); ???
```
The assignRole, hasRole, hasAnyRole, hasAllRoles, hasExactRoles and removeRole functions can accept a string, a \Spatie\Permission\Models\Role object or an \Illuminate\Support\Collection object.

```php
$role->hasPermissionTo('edit articles');
```

```php
// get collection
$role->permissions;
```

```php
// Check if the user has Direct permission
$user->hasDirectPermission('edit articles')

// Check if the user has All direct permissions
$user->hasAllDirectPermissions(['edit articles', 'delete articles']);

// Check if the user has Any permission directly
$user->hasAnyDirectPermission(['create articles', 'delete articles']);
```

```php
Route::group(['middleware' => ['role:manager']], function () { ... });
Route::group(['middleware' => ['permission:publish articles']], function () { ... });
Route::group(['middleware' => ['role_or_permission:publish articles']], function () { ... });

// multiple middleware
Route::group(['middleware' => ['role:manager','permission:publish articles']], function () { ... });
```

You can specify multiple roles or permissions with a | (pipe) character, which is treated as OR:

```php
Route::group(['middleware' => ['role:manager|writer']], function () { ... });
Route::group(['middleware' => ['permission:publish articles|edit articles']], function () { ... });
Route::group(['middleware' => ['role_or_permission:manager|edit articles']], function () { ... });
```

## Tips

```php
Log::info
```

```bash
php artisan cache:forget spatie.permission.cache
php artisan permission:cache-reset
```

```bash
php artisan optimize:clear
php artisan config:clear
php artisan optimize
php artisan clear-compiled
php artisan config:cache
php artisan route:cache
php artisan view:cache
composer dump-autoload
```

```bash
npm cache clean --force
```
