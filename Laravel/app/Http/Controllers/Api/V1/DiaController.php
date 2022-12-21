<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Dia;
use App\Http\Requests\StoreDiaRequest;
use App\Http\Requests\UpdateDiaRequest;
use App\Http\Controllers\Controller;

class DiaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreDiaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDiaRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dia  $dia
     * @return \Illuminate\Http\Response
     */
    public function show(Dia $dia)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Dia  $dia
     * @return \Illuminate\Http\Response
     */
    public function edit(Dia $dia)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDiaRequest  $request
     * @param  \App\Models\Dia  $dia
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDiaRequest $request, Dia $dia)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dia  $dia
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dia $dia)
    {
        //
    }
}
