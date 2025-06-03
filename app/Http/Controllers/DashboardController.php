<?php

namespace App\Http\Controllers;

use App\Models\ModelBerita;
use App\Models\User;
use App\Models\ModelEsql;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Carbon;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $totalBerita = ModelBerita::count();
        $totalUsers = User::count();
        $totalEsql = ModelEsql::count();
        
        // Hitung berita minggu ini
        $beritaMingguIni = ModelBerita::whereBetween('created_at', [
            Carbon::now()->startOfWeek(),
            Carbon::now()->endOfWeek()
        ])->count();

        // Ambil berita terbaru
        $beritaTerbaru = ModelBerita::with('user')
            ->latest()
            ->take(3)
            ->get()
            ->map(function ($berita) {
                return [
                    'id' => $berita->id,
                    'judul' => $berita->judul,
                    'gambar' => $berita->gambar,
                    'waktu' => Carbon::parse($berita->created_at)->diffForHumans(),
                    'penulis' => $berita->user->name
                ];
            });

        // Hitung ESQL hari ini
        $esqlHariIni = ModelEsql::whereDate('created_at', Carbon::today())->count();

        return Inertia::render('dashboard', [
            'stats' => [
                'totalBerita' => $totalBerita,
                'beritaMingguIni' => $beritaMingguIni,
                'totalUsers' => $totalUsers,
                'totalEsql' => $totalEsql,
                'esqlHariIni' => $esqlHariIni,
                'beritaTerbaru' => $beritaTerbaru
            ]
        ]);
    }
} 