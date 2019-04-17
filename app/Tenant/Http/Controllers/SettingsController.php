<?php

namespace App\Tenant\Http\Controllers;

class SettingsController
{
    public function __invoke()
    {
        return view('settings');
    }
}
