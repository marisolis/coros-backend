<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Fecha;
use App\Http\Controllers\Controller;
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
    public function index($fecha)
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
        return Fecha::all();
        
    }

    public function filterFecha($fecha){
        
        $date = explode("-", $fecha);
        $day = $date[0];
        $month = $date[1];
        $year = $date[2];
        Log::info($day);
        $fechas = Fecha::where('mes_id','=',$month)->where('dia_id','=',$day)->where('year_id','=',$year)->where('disponibilidad_dia','=',1)->get();
        $id_proveedores = array();
        foreach($fechas as $fecha){
            array_push($id_proveedores,$fecha->empresa_id);
        }
        return $id_proveedores;
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
    public function show(Fecha $fecha)
    {
        return new FechaResource($fecha);
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
