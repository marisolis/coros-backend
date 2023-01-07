<?php
namespace App\Http\Resources\V1;
use Illuminate\Http\Resources\Json\JsonResource;

class ContratoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return[
            'id'=>$this->id,
            'paquete_id'=>$this->paquete_id,
            'usuario_id'=>$this->usuario_id,
            'empresa_id'=>$this->empresa_id,
            'Tipo_evento'=>$this->Tipo_evento,
            'Forma_de_pago'=>$this->Forma_de_pago,
            'Fecha'=>$this->Fecha,
            'Hora'=>$this->Hora,
            'Lugar'=>$this->Lugar,
            'fecha_contrato'=>$this->fecha_contrato,
        ];
    }
}
