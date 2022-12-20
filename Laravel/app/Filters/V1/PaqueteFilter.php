<?php

namespace App\Filters\V1;

use Illuminate\Http\Request;
use App\Filters\ApiFilter;

class PaqueteFilter extends ApiFilter {
  protected $safeParms  = [
    'proveedorId'=>['eq'],
    'name' => ['eq'],
    'precio'=>['eq', 'lt', 'gt', 'lte', 'gte'],
    'descripcion'=>['eq'],
    'archivos'=>['eq']
  ];

  protected $columnMap = [
    'proveedorId'=>'proveedor_Id',
    'precio' => 'precio',
];

protected $operatorMap = [
  'eq' => '=',
  'lt' => '<',
  'lte' => '<=',
  'gt' => '>',
  'gte' => '>=',
  'ne' => '!='
];

}