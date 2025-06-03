<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ModelEsql extends Model
{
    protected $table = 'esql';
    protected $fillable = [
        'nama',
        'callsign',
        'tanggal',
        'utc',
        'band',
        'frekuensi',
        'mode',
        'rst'
    ];

    protected $casts = [
        'tanggal' => 'date',
        'utc' => 'datetime',
        'band' => 'integer',
        'frekuensi' => 'integer',
        'rst' => 'integer'
    ];
}
