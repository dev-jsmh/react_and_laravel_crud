<?php
/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Development
 * 2675859
 * SENA
 * 2024
 */

use App\Http\Controllers\ClientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// === get all clients ==
Route::get("/clients", [ClientController::class, "index"]);
// === get an specified client ==
Route::get("/clients/{id}", [ClientController::class, "show"]);
// === store new client ==
Route::post("/clients", [ClientController::class, "store"]);
// === update an specified client data ==
Route::put("/clients/{id}", [ClientController::class, "update"]);
// === delete a client by id ==
Route::delete("/clients/{id}", [ClientController::class, "destroy"]);

/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Development
 * 2675859
 * SENA
 * 2024
 */