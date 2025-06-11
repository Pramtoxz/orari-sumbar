<?php

namespace App\Http\Controllers;

use App\Models\ModelEsql;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EsqlController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $esql = ModelEsql::latest()->get();
        
        return Inertia::render('esql/admin/index', [
            'esql' => $esql
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('esql/admin/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'callsign' => 'required|string|max:255',
            'tanggal' => 'required|date',
            'utc' => 'required',
            'band' => 'required|integer',
            'frekuensi' => 'required|string|max:255',
            'mode' => 'required|string|max:255',
            'rst' => 'required|integer',
        ]);

        ModelEsql::create($validated);

        return redirect()->route('admin.esql.index')->with('success', 'Data E-QSL berhasil ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(ModelEsql $esql)
    {
        return Inertia::render('esql/admin/show', [
            'esql' => $esql
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ModelEsql $esql)
    {
        return Inertia::render('esql/admin/edit', [
            'esql' => $esql
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ModelEsql $esql)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'callsign' => 'required|string|max:255',
            'tanggal' => 'required|date',
            'utc' => 'required',
            'band' => 'required|integer',
            'frekuensi' => 'required|integer',
            'mode' => 'required|string|max:255',
            'rst' => 'required|integer',
        ]);

        $esql->update($validated);

        return redirect()->route('admin.esql.index')->with('success', 'Data E-QSL berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ModelEsql $esql)
    {
        $esql->delete();

        return redirect()->route('admin.esql.index')->with('success', 'Data E-QSL berhasil dihapus!');
    }
} 