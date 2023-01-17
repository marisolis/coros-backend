<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Year;
use App\Http\Controllers\Controller;

class YearController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Year::all();
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
     * @param  \App\Http\Requests\StoreYearRequest  $request
     * @return \Illuminate\Http\Response
     */


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Year  $Year
     * @return \Illuminate\Http\Response
     */
    public function show(Year $Year)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Year  $Year
     * @return \Illuminate\Http\Response
     */
    public function edit(Year $year)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateYearRequest  $request
     * @param  \App\Models\Year  $Year
     * @return \Illuminate\Http\Response
     */
 
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Year  $Year
     * @return \Illuminate\Http\Response
     */
    public function destroy(Year $year)
    {
        //
    }
}
