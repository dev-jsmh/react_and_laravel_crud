<?php

/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Development
 * 2675859
 * SENA
 * 2024
 */
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $table = "clients";
    protected $fillable = [
        "name",
        "lastname",
        "phone",
        "address"
    
    ];
}
/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Development
 * 2675859
 * SENA
 * 2024
 */