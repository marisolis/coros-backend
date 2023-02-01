<?php

use App\Http\Controllers\Api\V1\EmpresaUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\V1\FechaController;
use App\Http\Resources\V1\EmpresaCollection;
use App\Models\Empresa;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('login', [AuthController::class,'login']);
Route::post('register', [AuthController::class,'register']);

Route::group(['middleware'=>'api'],function(){
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);
});

Route::get('disponibilidad',[FechaController::class,'filterFecha']);

Route::group(['prefix'=>'v1','namespace'=> 'App\Http\Controllers\Api\V1'], function(){
    Route::apiResource('empresas', EmpresaController::class);
    Route::apiResource('findByEmail', EmpresaUserController::class);
    Route::apiResource('paquetes',PaqueteController::class);
    Route::apiResource('fechas',FechaController::class);
    Route::apiResource('usuario',usuarioController::class);
    Route::apiResource('contratacion', contratacionesController::class);
    Route::get('empresas/find', [EmpresaCollection::class, 'findByEmail']);
    Route::post('paquetes/bulk',['uses'=>'PaqueteController@bulkStore']);
});
