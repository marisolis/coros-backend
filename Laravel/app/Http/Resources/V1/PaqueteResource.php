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
            'empresa_id'=>$this->empresa_id,
            'name'=>$this->name,
            'precio'=>$this->precio,
            'descripcion'=>$this->descripcion,
            'imagen'=>$this->imagen,
            'video'=>$this->video,
            'audio'=>$this->audio
        ];
    }
}
