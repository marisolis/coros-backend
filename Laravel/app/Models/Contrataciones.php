<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contrataciones extends Model
{
    protected $table = 'contrataciones';
    protected $fillable = ['id_paquete','id_cliente','Tipo_evento', 'Forma_de_pago', 'Fecha', 'Hora', 'Lugar','fecha_contrato'];

    public $timestamps = false;
    use HasFactory;
}
