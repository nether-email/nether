<?php

namespace App\System\Http\Controllers;

class LandingController
{
    public function __invoke()
    {
        return view('landing');
    }
}
