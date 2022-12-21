<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Fecha;
use App\Http\Requests\StoreFechaRequest;
use App\Http\Requests\UpdateFechaRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\FechaResource;
use Illuminate\Http\Request;
use App\Filters\V1\FechaFilter;

class FechaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $filter = new FechaFilter();
        $queryItems = $filter->transform($request); //[['column', 'operator', 'value']]

        if (count($queryItems) == 0) {
            return Fecha::all();
            //return new PaqueteCollection(Paquete::all());
        } else {
            $fechas = Fecha::where($queryItems)->all();
            return $fechas->appends($request->query());
            //return new PaqueteCollection($paquetes->appends($request->query()));

        }
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
    public function store(StoreFechaRequest $request)
    {
        //
    }

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
    public function update(UpdateFechaRequest $request, Fecha $fecha)
    {
        //
    }

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
