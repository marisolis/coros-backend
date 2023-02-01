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

class EmpresaUserController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    public function show(String $email)
    {
        return Empresa::where('email',$email)->get();
    }
}
