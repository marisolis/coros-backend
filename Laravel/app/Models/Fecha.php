<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fecha extends Model
{
    use HasFactory;

    public function empresa(){
        return $this->belongsTo(Empresa::class);
    }

    public function meses(){
        return $this->belongsTo(Mes::class,'mes_id','num_mes');
    }

    public function dias(){
        return $this->belongsTo(Dia::class,'dia_id','name');
    }

    // public function horas(){
    //     return $this->belongsTo(Hora::class,'hora_id','name');
    // }
}
