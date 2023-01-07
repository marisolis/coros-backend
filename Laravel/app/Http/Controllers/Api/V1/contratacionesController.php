<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Contrataciones;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Paquete;
use App\Models\User;
use App\Models\Correos;
use App\Mail\correo;
use App\Filters\V1\UserFilter;
use App\Http\Controllers\Controller;

class contratacionesController extends Controller
{
    public function store(Request $request){
        $Contrato = request(['paquete_id','nombre_paquete','usuario_id','nombre_cliente','Tipo_evento', 'Forma_de_pago', 'Fecha', 'Hora', 'Lugar','fecha_contrato','correo','correo_cliente','numero_telefono','empresa_id']);
        Contrataciones::create($Contrato);

        Mail::to($Contrato['correo'])->send(new correo($Contrato['nombre_cliente'], $Contrato['numero_telefono'],$Contrato['correo_cliente'], $Contrato['nombre_paquete'],$Contrato['Tipo_evento'],$Contrato['Lugar'],$Contrato['Fecha'],$Contrato['Hora']));
    }
}