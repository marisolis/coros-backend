<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Paquete;
use App\Models\Usuario;
use App\Models\Correos;
use App\Mail\correo;
use App\Filters\V1\UserFilter;
use App\Http\Controllers\Controller;
use App\Filters\V1\ContratosFilter;
use App\Models\Contrataciones;
use App\Http\Resources\V1\ContratoCollection;
use App\Http\Resources\V1\ContratoResource;
use App\Http\Resources\V1\UserResource;
use App\Http\Resources\V1\UserCollection;
use App\Http\Requests\V1\UpdateUserRequest;

class usuarioController extends Controller
{
        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request){
        
        $filter = new UserFilter();
        $filterItems = $filter->transform($request);
 
        $includeContratos = $request->query('includeContratos');
 
        $contrato = Usuario::where($filterItems);
 
        if($includeContratos){
         $contrato = $contrato->with('contrataciones');
        }
 
        return new UserCollection($contrato->paginate()->appends($request->query()));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function show(Usuario $usuario)
    {
        $includeContratos = request()->query('includeContratos');

        if ($includeContratos) {
            return new UserResource($usuario->loadMissing('contrataciones'));
        }

        return new UserResource($usuario);
    }
}