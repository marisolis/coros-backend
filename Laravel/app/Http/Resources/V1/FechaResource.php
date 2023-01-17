<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Resources\Json\JsonResource;

class FechaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'empresaId'=>$this->empresa_id,
            'mesId'=>$this->mes_id,
            'diaId'=>$this->dia_id,
            'yearId'=>$this->year_id,
            'horaId'=>$this->hora_id,
            'disponibilidad'=>$this->disponibilidad,
        ];
    }
}
