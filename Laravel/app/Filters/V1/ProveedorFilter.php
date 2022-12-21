<?php

namespace App\Filters\V1;

use Illuminate\Http\Request;
use App\Filters\ApiFilter;

class ProveedorFilter extends ApiFilter {
  protected $safeParms  = [
    'name' => ['eq'],
    'num_Telefono'=>['eq'],
    'informacion'=>['eq']
  ];

  protected $columnMap = [
    'numTelefono' => 'num_Telefono',
];

protected $operatorMap = [
  'eq' => '='
];

}