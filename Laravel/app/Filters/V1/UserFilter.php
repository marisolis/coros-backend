<?php

namespace App\Filters\V1;

use Illuminate\Http\Request;
use App\Filters\ApiFilter;

class UserFilter extends ApiFilter {
  protected $safeParms  = [
    'name' => ['eq'],
    'email' => ['eq'],
    'phone' => ['eq'],
    'type' => ['eq'],
  ];

  protected $columnMap = [
];

protected $operatorMap = [
  'eq' => '='
];

}