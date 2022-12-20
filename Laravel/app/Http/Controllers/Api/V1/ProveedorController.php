<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Proveedor;
use App\Http\Requests\StoreProveedorRequest;
use App\Http\Requests\UpdateProveedorRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\ProveedorResource;
use App\Http\Resources\V1\ProveedorCollection;
use Illuminate\Http\Request;
use App\Filters\V1\ProveedorFilter;

class ProveedorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $filter = new ProveedorFilter();
        $filterItems = $filter->transform($request); //[['column', 'operator', 'value']]

        $includePaquetes = $request->query('includePaquetes');

        $proveedors = Proveedor::where($filterItems);
        
        if ($includePaquetes) {
            $proveedors = $proveedors->with('paquetes');
        }

        return new ProveedorCollection($proveedors->paginate()->appends($request->query()));
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
     * @param  \App\Http\Requests\StoreProveedorRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProveedorRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Proveedor  $proveedor
     * @return \Illuminate\Http\Response
     */
    public function show(Proveedor $proveedor)
    {
        $includePaquetes = request()->query('includePaquetes');

        if ($includePaquetes) {
            return new ProveedorResource($proveedor->loadMissing('paquetes'));
        }

        return new ProveedorResource($proveedor);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Proveedor  $proveedor
     * @return \Illuminate\Http\Response
     */
    public function edit(Proveedor $proveedor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProveedorRequest  $request
     * @param  \App\Models\Proveedor  $proveedor
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProveedorRequest $request, Proveedor $proveedor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Proveedor  $proveedor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Proveedor $proveedor)
    {
        //
    }
}
