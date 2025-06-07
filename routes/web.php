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
Route::get('publik/esql', [PublicEsqlController::class, 'index'])->name('publik.esql.index');
Route::post('publik/esql/search', [PublicEsqlController::class, 'search'])->name('publik.esql.search');
Route::get('publik/esql/{esql}', [PublicEsqlController::class, 'show'])->name('publik.esql.show');

// Route untuk area admin (setelah login)
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    // Route untuk manajemen ESQL (admin)
    Route::controller(EsqlController::class)->group(function () {
        Route::get('/esql', 'index')->name('admin.esql.index');
        Route::get('/esql/create', 'create')->name('admin.esql.create');
        Route::post('/esql', 'store')->name('admin.esql.store');
        Route::get('/esql/{esql}', 'show')->name('admin.esql.show');
        Route::get('/esql/{esql}/edit', 'edit')->name('admin.esql.edit');
        Route::put('/esql/{esql}', 'update')->name('admin.esql.update');
        Route::delete('/esql/{esql}', 'destroy')->name('admin.esql.destroy');
    });
    
    // Route untuk manajemen berita
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
