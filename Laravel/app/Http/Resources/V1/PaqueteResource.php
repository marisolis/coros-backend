<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Resources\Json\JsonResource;

class PaqueteResource extends JsonResource
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
            'proveedorId'=>$this->proveedor_id,
            'name'=>$this->name,
            'precio'=>$this->precio,
            'descripcion'=>$this->descripcion,
            'archivos'=>$this->archivos
        ];
    }
}
