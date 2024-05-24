<?php

/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Development
 * 2675859
 * SENA
 * 2024
 */

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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->String("name");
            $table->String("lastname");
            $table->String("phone");
            $table->String("address");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};


/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Development
 * 2675859
 * SENA
 * 2024
 */