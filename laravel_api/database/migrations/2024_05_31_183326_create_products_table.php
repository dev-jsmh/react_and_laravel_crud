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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("product_code")->nullable();
            $table->string("name");
            $table->string("model");
            $table->text("description")->nullable();
            $table->integer("stock");
            $table->string("image_url")->nullable() ;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
