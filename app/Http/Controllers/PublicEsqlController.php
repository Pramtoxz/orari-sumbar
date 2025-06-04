<?php

namespace App\Http\Controllers;

use App\Models\ModelEsql;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicEsqlController extends Controller
{
    public function index()
    {
        $esqls = ModelEsql::latest()->get();
        
        return Inertia::render('esql/public/index', [
            'esqls' => $esqls
        ]);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');
        
        $results = ModelEsql::where('callsign', 'LIKE', "%{$query}%")
            ->orWhere('nama', 'LIKE', "%{$query}%")
            ->get();

        return Inertia::render('esql/public/index', [
            'searchResults' => $results
        ]);
    }

    public function show(ModelEsql $esql)
    {
        return Inertia::render('esql/public/show', [
            'esql' => $esql
        ]);
    }
} 