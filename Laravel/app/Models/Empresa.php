<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'num_Telefono',
        'informacion',
        'email',
        'imagen',
    ];

    public function paquetes(){
        return $this->hasMany(Paquete::class);
    }

    public function fechas(){
        return $this->hasMany(Fecha::class);
    }
}
