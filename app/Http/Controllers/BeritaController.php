<?php

namespace App\Http\Controllers;

use App\Models\ModelBerita;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BeritaController extends Controller
{
    public function index()
    {
        $berita = ModelBerita::with('user')
            ->orderBy('tanggal', 'desc')
            ->get();
        
        return Inertia::render('berita/index', [
            'berita' => $berita
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('berita/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'isi' => 'required|string',
            'tanggal' => 'required|date',
        ]);

        if ($request->hasFile('gambar')) {
            $validated['gambar'] = $request->file('gambar')->store('berita', 'public');
        }

        // Set user_id jika user login, jika tidak set default
        $validated['user_id'] = $request->user() ? $request->user()->id : 1;

        ModelBerita::create($validated);

        return redirect()->route('berita.index')->with('success', 'Berita berhasil ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(ModelBerita $beritum)
    {
        return Inertia::render('berita/show', [
            'berita' => $beritum->load('user')
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ModelBerita $beritum)
    {
        return Inertia::render('berita/edit', [
            'berita' => $beritum
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ModelBerita $beritum)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'isi' => 'required|string',
            'tanggal' => 'required|date',
        ]);

        if ($request->hasFile('gambar')) {
            $validated['gambar'] = $request->file('gambar')->store('berita', 'public');
        }

        $beritum->update($validated);

        return redirect()->route('berita.index')->with('success', 'Berita berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ModelBerita $beritum)
    {
        $beritum->delete();

        return redirect()->route('berita.index')->with('success', 'Berita berhasil dihapus!');
    }
} 