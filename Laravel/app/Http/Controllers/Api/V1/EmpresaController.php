<?php

namespace App\Http\Controllers\Api\V1;

use App\Filters\V1\EmpresaFilter;
use App\Models\Empresa;
use App\Http\Controllers\Controller;
use App\Http\Requests\V1\StoreEmpresaRequest;
use App\Http\Requests\V1\UpdateEmpresaRequest;
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
       $includeContrato = $request->query('includeContratos');
       
       $empresas = Empresa::where($filterItems);

       if($includeFechas){
        $empresas = $empresas->with('fechas');
       }

       if($includePaquetes){
        $empresas = $empresas->with('paquetes');
       }

       if($includeContrato){
        $empresas = $empresas->with('contrataciones');
       }

       return new EmpresaCollection($empresas->paginate()->appends($request->query()));
}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreEmpresaRequest  $request
     * @return \Illuminate\Http\Response
     */
    // public function store(StoreEmpresaRequest $request)
    // {
    //     return new EmpresaResource(Empresa::create($request->all()));
    // }

    public function store(Request $request){
        $newEmpresa = new Empresa();

        if($request->hasFile('imagen')){
            $file = $request->file('imagen');
            $destinationPath = 'images/';
            $filename = time() . '-' . $file->getClientOriginalName();
            $uploadSuccess = $request->file('imagen')->move($destinationPath, $filename);
            $newEmpresa->imagen = "http://127.0.0.1:8000/" . $destinationPath . $filename;
        }

        $newEmpresa->name = $request->name;
        $newEmpresa->num_Telefono=$request->num_Telefono;
        $newEmpresa->informacion=$request->informacion;
        $newEmpresa->email=$request->email;

        $newEmpresa->save();

        return $newEmpresa;
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
        $includeContrato = request()->query('includeContratos');

        if ($includePaquetes) {
            return new EmpresaResource($empresa->loadMissing('paquetes'));
        }
        if ($includeFechas) {
            return new EmpresaResource($empresa->loadMissing('fechas'));
        }
        if ($includeContrato) {
            return new EmpresaResource($empresa->loadMissing('contrataciones'));
        }

        return new EmpresaResource($empresa);
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
        $empresa->update($request->all());
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
