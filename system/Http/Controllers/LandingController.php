<?php

namespace System\Http\Controllers;

class LandingController
{
    public function __invoke()
    {
        return view('landing');
    }
}