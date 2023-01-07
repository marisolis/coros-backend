<?php
namespace App\Http\Resources\V1;
use Illuminate\Http\Resources\Json\JsonResource;
class EmpresaResource extends JsonResource
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
            'name'=>$this->name,
            'numTelefono'=>$this->num_Telefono,
            'informacion'=>$this->informacion,
            'email'=>$this->email,
            'imagen'=>$this->imagen,
            'fechas' => FechaResource::collection($this->whenLoaded('fechas')),
            'paquetes' => PaqueteResource::collection($this->whenLoaded('paquetes')),
            'contrataciones' => ContratoResource::collection($this->whenLoaded('contrataciones')),
        ];
    }
}
