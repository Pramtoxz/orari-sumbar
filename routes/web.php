<?php

use App\Http\Controllers\BeritaController;
use App\Http\Controllers\EsqlController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\PublicEsqlController;
use App\Http\Controllers\DashboardController;

Route::get('/', [WelcomeController::class, 'index'])->name('welcome');
// Route untuk artikel publik
Route::get('/artikel', [WelcomeController::class, 'artikelIndex'])->name('artikel.index');
Route::get('/artikel/{berita}', [WelcomeController::class, 'artikelShow'])->name('artikel.show');

// Route untuk ESQL publik
Route::prefix('esql')->name('esql.')->group(function () {
    Route::get('/', [PublicEsqlController::class, 'index'])->name('index');
    Route::post('/search', [PublicEsqlController::class, 'search'])->name('search');
    Route::get('/{esql}', [PublicEsqlController::class, 'show'])->name('show');
});

// Route untuk manajemen berita (CRUD operations)
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    // Admin ESQL routes
    Route::prefix('admin/esql')->name('admin.esql.')->group(function () {
        Route::get('/', [EsqlController::class, 'index'])->name('index');
        Route::get('/create', [EsqlController::class, 'create'])->name('create');
        Route::post('/', [EsqlController::class, 'store'])->name('store');
        Route::get('/{esql}', [EsqlController::class, 'show'])->name('show');
        Route::get('/{esql}/edit', [EsqlController::class, 'edit'])->name('edit');
        Route::put('/{esql}', [EsqlController::class, 'update'])->name('update');
        Route::delete('/{esql}', [EsqlController::class, 'destroy'])->name('destroy');
    });

    Route::controller(BeritaController::class)->group(function () {
        Route::get('/berita', 'index')->name('berita.index');
        Route::get('/berita/create', 'create')->name('berita.create');
        Route::post('/berita', 'store')->name('berita.store');
        Route::get('/berita/{beritum}', 'show')->name('berita.show');
        Route::get('/berita/{beritum}/edit', 'edit')->name('berita.edit');
        Route::put('/berita/{beritum}', 'update')->name('berita.update');
        Route::delete('/berita/{beritum}', 'destroy')->name('berita.destroy');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
