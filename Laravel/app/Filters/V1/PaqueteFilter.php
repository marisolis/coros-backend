<?php

namespace App\Filters\V1;

use Illuminate\Http\Request;
use App\Filters\ApiFilter;

class PaqueteFilter extends ApiFilter {
  protected $safeParms  = [
    'empresa_id'=>['eq'],
    'name' => ['eq'],
    'precio'=>['eq', 'lt', 'gt', 'lte', 'gte'],
    'descripcion'=>['eq'],
    'imagen'=>['eq'],
    'video'=>['eq'],
    'audio'=>['eq']
  ];

  protected $columnMap = [
    'empresa_id'=>'proveedor_Id',
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