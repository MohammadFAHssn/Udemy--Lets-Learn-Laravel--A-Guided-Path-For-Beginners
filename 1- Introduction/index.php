<!-- maybe later:
1. Welcome To The Course!.mp4
7. Reducing Duplication in Blade
4. What Is Markdown
-->


<!-- install php:
php.net -> Download -> Windows downloads -> Zip -> unzip -> rename to php -> move it to "program files"
At this point, what we want to do now is
set things up so that from a command line or from a terminal we can execute PHP
So in other words, we just need to let Windows know that
if we type PHP in a command line,
we want to point towards a file that lives in this directory
if we go to terminal and type php --version
obviously it doesn't work
we must add to path!
and now if we type php --version ...
if nothing shows, it is because we do not install c++ distributable
So for example, if you go into the program files, PHP folder and
in that folder you can find the application that's just called PHP
And if you double click it, you can see an error

I want to first have you make a few adjustments to your PHP installation
so that it will play nicely with our Laravel project that we're going to build
Here's what I want you to do:
in your program files directory
In this folder, we want to make edits to the file that's named php.ini
Now, I actually don't have a file with that exact name,
but you might have a file if you don't named "php.ini-development"
rename to "php.ini"
Okay, Now we just want to make a couple quick adjustments to this file
So we want to edit this file in a text editor
delete the semicolon from(So now it's no longer commented out):
extension=fileinfo
extension=gd
extension=curl
extension=mbstring
extension=openssl
extension=pdo_mysql

extension=pdo_sqlite -> not sure!

extension=zip



Now we need to make sure that Windows can successfully find those extension files
extension_dir = "ext" -> extension_dir = "C:\Program Files\php\ext"


search for:
memory_limit -? 256
-->

<!-- let write some php code:
The first thing we need to do is actually enter into PHP mode or have an opening PHP tag
-->
<?php

echo 2 + 2;
echo "\n";

/* to execute it:
open command line -> php 1.php
it is interesting: it print everything! :)
 */

$aVariable = 2 + 2;

echo $aVariable + 2;
echo "\n";

$aString = "a string";

echo $aString;
echo "\n";

$anotherString = "another string: " . $aString . " !";

echo $anotherString;
echo "\n";

$anotherString = "another string: $aString !";
echo $anotherString;
echo "\n";

$anotherString = 'another string: $aString ! \n\n';
echo $anotherString;
echo "\n";

function doubleMe($x)
{
    return $x * 2;
}

echo doubleMe($aVariable);
echo "\n";

/* open settings(json)
every settings i have applied is saved as a json file -> settings -> up in the top right hand corner
add this: "php.validate.executablePath": "C:\\Program Files\\php\\php.exe"
 */

/* PHP relate to web development
write this in cmd: php -S localhost:8000
and open chrome and search localhost:8000

in the real world, right?
Like a public website that the entire world could visit,
you would never, ever, ever, ever use the built-in PHP web server like this
 */

/*
npm in node = composer in php
 */

/* install composer:
https://getcomposer.org/ -> Download -> Windows Installer -> Composer-Setup.exe
then default installation
and then restart the computer
to make sure that it was installed successfully go to cmd and type composer
 */

/* use composer:
we want convert this: "The sky is blue, and the grass is green!!!"
to this: "the-sky-is-blue-and-the-grass-is-green"
i mean replace spaces with dashes and remove commas and exclamation marks and convert lowercase to uppercase
it is sort of URL safe or slug version of text, something that would be at the end of a URL like for a blog post
ok
just like npm
open terminal in directory folder in vscode
and type "composer require cocur/slugify"

adjust this file so that composer can automatically give us easy access to our dependencies
 */

require __DIR__ . '/vendor/autoload.php';

use Cocur\Slugify\Slugify;

/*
Cocur: just the author of the Slugify package
Now without the help of composer
PHP on its own, will not auto load separate files and libraries for us like this
In other words, without the help of composer
this use keyword is just telling PHP that we want to use this namespace
However, with the help of composer because we've included this composer file called Auto Load
, it will automatically load our dependencies for us whenever we say use and then a namespace

Now if you wanted to truly understand PHP namespaces and the use keyword ->
https://www.daggerhartlab.com/autoloading-namespaces-in-php/
 */

$slugify = new Slugify();
// new instance of slugify class

echo $slugify->slugify('The sky is blue, and the grass is green!!!');
// method!

// we use for example UserController::class, this "class" word is a static constant
// which contains the fully qualified class name, which means class name, including the namespace