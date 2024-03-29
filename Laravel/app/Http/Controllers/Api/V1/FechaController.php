<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Fecha;
use App\Http\Controllers\Controller;
use App\Models\Paquete;
use App\Http\Resources\V1\FechaResource;
use Illuminate\Http\Request;
use App\Filters\V1\FechaFilter;
use Illuminate\Support\Facades\Log;

class FechaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $filter = new FechaFilter();
        // $queryItems = $filter->transform($request); //[['column', 'operator', 'value']]

        // if (count($queryItems) == 0) {
        //     return Fecha::all();
        //     //return new PaqueteCollection(Paquete::all());
        // } else {
        //     $fechas = Fecha::where($queryItems)->all();
        //     return $fechas->appends($request->query());
        //     //return new PaqueteCollection($paquetes->appends($request->query()));
        $fechas = Fecha::all();
       

        return $fechas;
        
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreFechaRequest  $request
     * @return \Illuminate\Http\Response
     */
 

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Fecha  $fecha
     * @return \Illuminate\Http\Response
     */
    public function show($fecha)
    {
        $id_proveedores = [];
        $fechitas = Fecha::where('fecha',$fecha)->where('disponibilidad',1)->get();
        foreach($fechitas as $fechita){
            array_push($id_proveedores,$fechita->empresa_id);
        }
        $paquetes = [];
        foreach($id_proveedores as $id){
            $paquete = Paquete::where('empresa_id',$id)->get();
            array_push($paquetes,$paquete);
        }
        return $paquetes;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Fecha  $fecha
     * @return \Illuminate\Http\Response
     */
    public function edit(Fecha $fecha)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFechaRequest  $request
     * @param  \App\Models\Fecha  $fecha
     * @return \Illuminate\Http\Response
     */


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Fecha  $fecha
     * @return \Illuminate\Http\Response
     */
    public function destroy(Fecha $fecha)
    {
        //
    }
}
