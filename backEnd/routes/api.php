<?php
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use GuzzleHttp\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\TemplatesController;
use App\Http\Controllers\MailController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::put('/templates/{id}', [TemplatesController::class, 'update']);
Route::get('/templates/{id}', [TemplatesController::class, 'showById']);
Route::apiResource('contacts', ContactController::class);
Route::apiResource('templates', TemplatesController::class);
Route::post('send-email', [MailController::class, 'sendEmail']);

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
                ->middleware('api-session')
                ->name('login');


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
