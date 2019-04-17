<?php

use App\System\Http\Controllers\LandingController;

Route::get('/{fallback?}', LandingController::class)
    ->name('home')
    ->where('fallback', '.*');
