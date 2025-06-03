<?php

use App\Http\Controllers\BeritaController;
use App\Http\Controllers\EsqlController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\PublicEsqlController;
use App\Http\Controllers\DashboardController;

Route::get('/', function () {
    return redirect('/login');
});

// Route untuk artikel publik
Route::get('/artikel', [WelcomeController::class, 'artikelIndex'])->name('artikel.index');
Route::get('/artikel/{berita}', [WelcomeController::class, 'artikelShow'])->name('artikel.show');

// Route untuk ESQL publik
Route::get('public/esql', [PublicEsqlController::class, 'index'])->name('public.esql.index');
Route::post('public/esql/search', [PublicEsqlController::class, 'search'])->name('public.esql.search');
Route::get('public/esql/{esql}', [PublicEsqlController::class, 'show'])->name('public.esql.show');

// Route untuk manajemen berita (CRUD operations)

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('home', function () {
        return redirect()->route('dashboard');
    })->name('home');
    Route::resource('esql', EsqlController::class);
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
