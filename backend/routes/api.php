<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AuthController;

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
Route::post('register', [AuthController::class, 'register']);

Route::post('login', [AuthController::class, 'login']);

//protected route
Route::group(['middleware'=>['auth:sanctum']], function() {
    Route::post('logout', [AuthController::class, 'logout']);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('products', [ProductController::class, 'getProducts'])->name('products');

Route::get('product/{id}', [ProductController::class, 'getProductById']);

Route::post('addProduct', [ProductController::class, 'addProduct'])->name('product.add');

Route::put('updateProduct/{id}', [ProductController::class, 'update'])->name('product.update');

Route::delete('destroyProduct/{id}', [ProductController::class, 'destroy'])->name('product.destroy');

Route::get('categories', [CategoryController::class, 'getCategories'])->name('categories');

Route::get('new-arrivals', [ProductController::class, 'newArrivals'])->name('products.new');

Route::get('best-sellers', [ProductController::class, 'bestSellers'])->name('products.best');

Route::get('category/{name}/products', [CategoryController::class, 'getCategoryByName'])->name('category');

Route::get('category/{id}', [ProductController::class, 'getProductByCategory'])->name('product.category');
