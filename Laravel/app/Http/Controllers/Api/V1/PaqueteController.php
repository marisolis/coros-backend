<?php

namespace App\Http\Controllers\Api\V1;

use App\Filters\V1\PaqueteFilter;
use App\Models\Paquete;
use App\Http\Requests\V1\UpdatePaqueteRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\PaqueteCollection;
use App\Http\Resources\V1\PaqueteResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Arr;
use App\Http\Requests\V1\BulkStorePaqueteRequest;
use App\Http\Requests\V1\StorePaqueteRequest;

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
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePaqueteRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePaqueteRequest $request)
    {
        return new PaqueteResource(Paquete::create($request->all()));
    }

    public function bulkStore(BulkStorePaqueteRequest $request){
        $bulk = collect($request->all())->map(function($arr, $key){
            return Arr::except($arr, ['empresaId']);
        });

        Paquete::insert($bulk->toArray());
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
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePaqueteRequest  $request
     * @param  \App\Models\Paquete  $paquete
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePaqueteRequest $request, Paquete $paquete)
    {
        $paquete->update($request->all());
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
