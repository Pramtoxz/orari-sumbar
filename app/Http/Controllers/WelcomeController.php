<?php

namespace App\Http\Controllers;

use App\Models\ModelBerita;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        $berita = ModelBerita::with('user')
            ->orderBy('tanggal', 'desc')
            ->take(4)
            ->get();

        return Inertia::render('welcome', [
            'berita' => $berita
        ]);
    }

    public function artikelIndex()
    {
        $berita = ModelBerita::with('user')
            ->orderBy('tanggal', 'desc')
            ->get();

        return Inertia::render('artikel/index', [
            'berita' => $berita
        ]);
    }

    public function artikelShow(ModelBerita $berita)
    {
        return Inertia::render('artikel/[id]', [
            'berita' => $berita->load('user')
        ]);
    }
} 