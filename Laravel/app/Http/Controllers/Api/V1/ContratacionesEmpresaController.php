<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Contrataciones;
use App\Http\Controllers\Controller;

class ContratacionesEmpresaController extends Controller
{
    public function show(int $id)
    {
        $contrataciones = Contrataciones::join('users','users.id','=','contrataciones.usuario_id')
        ->join('empresas','empresas.id','=','contrataciones.empresa_id')
        ->join('paquetes','paquetes.id','=','contrataciones.paquete_id')
        ->select('contrataciones.*','users.name AS nombre_cliente','empresas.name AS nombre_empresa','paquetes.name AS nombre_paquete')
        ->where('contrataciones.empresa_id',$id)
        ->Get();

    return $contrataciones;
    }
}
