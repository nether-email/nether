<?php

namespace App\Tenant\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Tenancy\Affects\Routes\Events\ConfigureRoutes;

class RouteServiceProvider extends ServiceProvider
{
    public function register()
    {
        Event::listen(ConfigureRoutes::class, function (ConfigureRoutes $event) {
            $event
                ->flush()
                ->fromFile(
                    ['middleware' => ['web']],
                    __DIR__ .  '/../routes/web.php'
                );
        });
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->group(base_path('system/routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
             ->middleware('api')
             ->group(base_path('system/routes/api.php'));
    }
}
