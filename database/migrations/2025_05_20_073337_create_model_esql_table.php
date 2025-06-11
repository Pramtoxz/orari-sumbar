<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('esql', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('callsign');
            $table->date('tanggal');
            $table->time('utc');
            $table->integer('band');
            $table->string('frekuensi');
            $table->string('mode');
            $table->integer('rst');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('anggotas');
    }
};
