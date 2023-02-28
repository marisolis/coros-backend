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
use App\Http\Requests\V1\UpdateContratacionesRequest;
use Illuminate\Support\Facades\Log;

class contratacionesController extends Controller
{

    public function index()
    {
        $contrataciones = Contrataciones::join('users','users.id','=','contrataciones.usuario_id')
            ->join('empresas','empresas.id','=','contrataciones.empresa_id')
            ->join('paquetes','paquetes.id','=','contrataciones.paquete_id')
            ->select('contrataciones.*','users.name AS nombre_cliente','empresas.name AS nombre_empresa','paquetes.name AS nombre_paquete')
            ->get();

        return Contrataciones::all();

    }

    public function store(Request $request){
        // $Contrato = $request(['paquete_id','nombre_paquete','usuario_id','nombre_cliente','Tipo_evento', 'Forma_de_pago', 'Fecha', 'Hora', 'Lugar','fecha_contrato','correo','correo_cliente','numero_telefono','empresa_id']);

        $new_contrato = new Contrataciones();
        $new_contrato->paquete_id = $request->paquete_id;
        // $new_contrato->nombre_paquete = $request->nombre_paquete;
        $new_contrato->usuario_id = $request->usuario_id;
        // $new_contrato->nombre_cliente = $request->nombre_cliente;
        $new_contrato->Tipo_evento = $request->Tipo_evento;
        $new_contrato->Forma_de_pago = $request->Forma_de_pago;
        $new_contrato->Fecha = $request->Fecha;
        $new_contrato->Hora = $request->Hora;
        $new_contrato->Lugar = $request->Lugar;
        $new_contrato->fecha_contrato = $request->fecha_contrato;
        // $new_contrato->correo = $request->correo;
        // $new_contrato->correo_cliente = $request->correo_cliente;
        // $new_contrato->numero_telefono = $request->numero_telefono;
        $new_contrato->empresa_id = $request->empresa_id;
        $new_contrato->status = $request->status;
        $new_contrato->save();

        // Contrataciones::create($Contrato);

        // Mail::to($Contrato['correo'])->send(new correo($Contrato['nombre_cliente'], $Contrato['numero_telefono'],$Contrato['correo_cliente'], $Contrato['nombre_paquete'],$Contrato['Tipo_evento'],$Contrato['Lugar'],$Contrato['Fecha'],$Contrato['Hora']));

        Mail::to($request->correo)->send(new correo($request->nombre_cliente, $request->numero_telefono,$request->correo_cliente, $request->nombre_paquete,$new_contrato->Tipo_evento,$new_contrato->Lugar,$new_contrato->Fecha,$new_contrato->Hora)
        );

        return response()->json([
            'message' => 'Contrato creado correctamente'
        ], 201);
    }

    public function update(UpdateContratacionesRequest $request, Contrataciones $contratacion)
    {
        $contratacion->update($request->all());
    }

    // public function update(UpdateContratacionesRequest $request, $id){
    //     // dd($id);
    //     // dd($request->all());
    //     $contratacion = Contrataciones::find($id);
    //     // dd($contratacion);

    //     $contratacion->paquete_id = $request->paquete_id;
    //     // $contratacion->nombre_paquete = $request->nombre_paquete;
    //     $contratacion->usuario_id = $request->usuario_id;
    //     // $contratacion->nombre_cliente = $request->nombre_cliente;
    //     $contratacion->Tipo_evento = $request->Tipo_evento;
    //     $contratacion->Forma_de_pago = $request->Forma_de_pago;
    //     $contratacion->Fecha = $request->Fecha;
    //     $contratacion->Hora = $request->Hora;
    //     $contratacion->Lugar = $request->Lugar;
    //     $contratacion->fecha_contrato = $request->fecha_contrato;
    //     // $contratacion->correo = $request->correo;
    //     // $contratacion->correo_cliente = $request->correo_cliente;
    //     // $contratacion->numero_telefono = $request->numero_telefono;
    //     $contratacion->empresa_id = $request->empresa_id;
    //     $contratacion->status = $request->status;
    //     $contratacion->save();

    //     return $contratacion;
    // }

    public function show($id)
    {
        $contratacion = Contrataciones::join('users','users.id','=','contrataciones.usuario_id')
            ->join('empresas','empresas.id','=','contrataciones.empresa_id')
            ->join('paquetes','paquetes.id','=','contrataciones.paquete_id')
            ->select('contrataciones.*','users.name AS nombre_cliente','empresas.name AS nombre_empresa','paquetes.name AS nombre_paquete')
            ->where('contrataciones.id',$id)->first();

        return $contratacion;
    }

    public function showByCliente($id)
    {
        $contrataciones = Contrataciones::join('users','users.id','=','contrataciones.usuario_id')
            ->join('empresas','empresas.id','=','contrataciones.empresa_id')
            ->join('paquetes','paquetes.id','=','contrataciones.paquete_id')
            ->select('contrataciones.*','users.name AS nombre_cliente','empresas.name AS nombre_empresa','paquetes.name AS nombre_paquete')
            ->where('contrataciones.usuario_id',$id)
            ->Get();

        return Contrataciones::all();
    }

    public function showByProveedor($id)
    {
        $contrataciones = Contrataciones::join('users','users.id','=','contrataciones.usuario_id')
            ->join('empresas','empresas.id','=','contrataciones.empresa_id')
            ->join('paquetes','paquetes.id','=','contrataciones.paquete_id')
            ->select('contrataciones.*','users.name AS nombre_cliente','empresas.name AS nombre_empresa','paquetes.name AS nombre_paquete')
            ->where('contrataciones.empresa_id',$id)
            ->Get();

        return $contrataciones;
    }

    public function destroy($id)
    {
        Contrataciones::destroy($id);
    }
}
