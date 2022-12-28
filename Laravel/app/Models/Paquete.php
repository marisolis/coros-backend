<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paquete extends Model
{
    use HasFactory;

    protected $fillable = [
        'empresa_id',
        'name',
        'precio',
        'descripcion',
    ];

    public function empresa(){
        return $this->belongsTo(Empresa::class);
    }
}
