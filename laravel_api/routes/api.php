<?php
/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Development
 * 2675859
 * SENA
 * 2024
 */

use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProductController;

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

// ======= router related to products =======

Route::get("/products", [ProductController::class, "index"]);
Route::get("/products/{id}", [ProductController::class, "show"]);
Route::post("/products", [ProductController::class, "store"]);
Route::put("/products/{id}", [ProductController::class, "update"]);
Route::delete("/products/{id}", [ProductController::class, "destroy"]);

Route::get('/product/images', [ProductController::class, 'getImages']);
/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Development
 * 2675859
 * SENA
 * 2024
 */