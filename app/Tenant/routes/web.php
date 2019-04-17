<?php

use App\Tenant\Http\Controllers\MailboxController;
use App\Tenant\Http\Controllers\SettingsController;


Route::get('/m/{fallback?}', MailboxController::class)
    ->name('mail')
    ->where('fallback', '.*');

Route::get('/s/{fallback?}', SettingsController::class)
    ->name('home')
    ->where('fallback', '.*');
