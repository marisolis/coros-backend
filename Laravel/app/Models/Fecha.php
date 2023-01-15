<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fecha extends Model
{
    use HasFactory;

    // protected $fillable = [
    //     'empresa_id',
    //     'mes_id',
    //     'dia_id',
    //     'year_id',
    //     'horas_id',
    //     'disponibilidad',
    // ];
    protected $fillable = [
        'empresa_id',
        'fecha',
        'hora',
        'disponibilidad',
    ];

    public $timestamps = false;

    public function empresa(){
        return $this->belongsTo(Empresa::class);
    }

    // public function meses(){
    //     return $this->belongsTo(Mes::class);
    // }

    // public function dias(){
    //     return $this->belongsTo(Dia::class);
    // }

    // public function horas(){
    //     return $this->belongsTo(Hora::class);
    // }
    // public function years(){
    //     return $this->belongsTo(Year::class);
    // }
}
