<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fecha extends Model
{
    use HasFactory;

    public function proveedor(){
        return $this->belongsTo(Proveedor::class);
    }

    public function meses(){
        return $this->belongsTo(Mes::class);
    }

    public function dias(){
        return $this->belongsTo(Dia::class);
    }

    public function horas(){
        return $this->belongsTo(Hora::class);
    }
}
