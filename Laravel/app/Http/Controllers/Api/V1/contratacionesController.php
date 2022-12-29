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
    public function index(Request $request){
        $Contrato = request(['id_paquete','nombre_paquete','id_cliente','nombre_cliente','Tipo_evento', 'Forma_de_pago', 'Fecha', 'Hora', 'Lugar','fecha_contrato','correo','correo_cliente']);
        Contrataciones::create($Contrato);

        Mail::to($Contrato['correo'])->send(new correo($Contrato['nombre_paquete'],$Contrato['nombre_cliente'],$Contrato['Tipo_evento'],$Contrato['Fecha'],$Contrato['Hora'],$Contrato['Lugar'],$Contrato['correo_cliente']));
    }
}