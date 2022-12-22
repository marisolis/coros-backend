<?php

namespace App\Http\Controllers\Api\V1;

use App\Filters\V1\EmpresaFilter;
use App\Models\Empresa;
use App\Http\Requests\StoreEmpresaRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateEmpresaRequest;
use App\Http\Resources\V1\EmpresaResource;
use App\Http\Resources\V1\EmpresaCollection;
use Illuminate\Http\Request;

class EmpresaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
       $filter = new EmpresaFilter();
       $filterItems = $filter->transform($request);

       $includePaquetes = $request->query('includePaquetes');
       $includeFechas = $request->query('includeFechas');

       $empresas = Empresa::where($filterItems);

       if($includeFechas){
        $empresas = $empresas->with('fechas');
       }

       if($includePaquetes){
        $empresas = $empresas->with('paquetes');
       }

       return new EmpresaCollection($empresas->paginate()->appends($request->query()));
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
     * @param  \App\Http\Requests\StoreEmpresaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEmpresaRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    public function show(Empresa $empresa)
    {
        $includeFechas = request()->query('includeFechas');
        $includePaquetes = request()->query('includePaquetes');

        if ($includePaquetes) {
            return new EmpresaResource($empresa->loadMissing('paquetes'));
        }
        if ($includeFechas) {
            return new EmpresaResource($empresa->loadMissing('fechas'));
        }

        return new EmpresaResource($empresa);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    public function edit(Empresa $empresa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEmpresaRequest  $request
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEmpresaRequest $request, Empresa $empresa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Empresa $empresa)
    {
        //
    }
}
