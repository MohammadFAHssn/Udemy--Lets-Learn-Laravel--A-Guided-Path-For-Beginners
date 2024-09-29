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
