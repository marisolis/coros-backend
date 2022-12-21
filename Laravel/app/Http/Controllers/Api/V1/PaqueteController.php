<?php

namespace App\Http\Controllers\Api\V1;

use App\Filters\V1\PaqueteFilter;
use App\Models\Paquete;
use App\Http\Requests\StorePaqueteRequest;
use App\Http\Requests\UpdatePaqueteRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\PaqueteCollection;
use App\Http\Resources\V1\PaqueteResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class PaqueteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $filter = new PaqueteFilter();
        $queryItems = $filter->transform($request); //[['column', 'operator', 'value']]

        if (count($queryItems) == 0) {
            return Paquete::all();
            //return new PaqueteCollection(Paquete::all());
        } else {
            $paquetes = Paquete::where($queryItems)->all();
            return $paquetes->appends($request->query());
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
     * @param  \App\Http\Requests\StorePaqueteRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePaqueteRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Paquete  $paquete
     * @return \Illuminate\Http\Response
     */
    public function show(Paquete $paquete)
    {
        return new PaqueteResource($paquete);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Paquete  $paquete
     * @return \Illuminate\Http\Response
     */
    public function edit(Paquete $paquete)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePaqueteRequest  $request
     * @param  \App\Models\Paquete  $paquete
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePaqueteRequest $request, Paquete $paquete)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Paquete  $paquete
     * @return \Illuminate\Http\Response
     */
    public function destroy(Paquete $paquete)
    {
        //
    }
}
