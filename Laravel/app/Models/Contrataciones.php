<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contrataciones extends Model
{
    use HasFactory;
    protected $table = 'contrataciones';
    protected $fillable = [
        'paquete_id',
        'usuario_id',
        'empresa_id',
        'Tipo_evento', 
        'Forma_de_pago', 
        'Fecha', 
        'Hora', 
        'Lugar',
        'fecha_contrato'
    ];

    public $timestamps = false;

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function empresa(){
        return $this->belongsTo(Empresa::class);
    }

}

