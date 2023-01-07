<?php

namespace App\Filters\V1;

use Illuminate\Http\Request;
use App\Filters\ApiFilter;

class ContratosFilter extends ApiFilter {
  protected $safeParms  = [
    'paquete_id' => ['eq'],
    'cliente_id' => ['eq'],
    'empresa_id' => ['eq'],
    'Tipo_evento' => ['eq'],
    'Forma_de_pago' => ['eq'],
    'Fecha' => ['eq'],
    'Hora'=>['eq'],
    'Lugar'=>['eq'],
    'fecha_contrato'=>['eq']
  ];

  protected $columnMap = [
    'paquete_id' => 'paquete_id',
    'cliente_id' => 'cliente_id',
    'empresa_id' => 'empresa_id',
];

protected $operatorMap = [
  'eq' => '='
];

}