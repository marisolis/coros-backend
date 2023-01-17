<?php

namespace App\Filters\V1;

use Illuminate\Http\Request;
use App\Filters\ApiFilter;

class FechaFilter extends ApiFilter {
  protected $safeParms  = [
    'proveedor_id'=>['eq'],
    'mes_id' => ['eq'],
    'dia_id'=>['eq'],
    'hora_id' => ['eq'],
    'year_id' => ['eq'],
    'disponibilidad'=>['eq']
  ];

  protected $columnMap = [
    'proveedorId'=>'proveedor_id',
    'mesId' => 'mes_id',
    'diaId'=> 'dia_id',
    'horaId' => 'hora_id',
    'year_id' => 'year_id',
  ];

protected $operatorMap = [
  'eq' => '='
];

}