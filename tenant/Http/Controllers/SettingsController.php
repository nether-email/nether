<?php

namespace Tenant\Http\Controllers;

class SettingsController
{
    public function __invoke()
    {
        return view('settings');
    }
}