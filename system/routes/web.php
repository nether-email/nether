<?php

use System\Http\Controllers\LandingController;

Route::get('/{fallback?}', LandingController::class)
    ->name('home')
    ->where('fallback', '.*');