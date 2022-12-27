<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePaqueteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $method = $this->method();

        if($method=='PUT'){
            return [
                'empresa_id'=>['required', 'integer'],
                'name'=>['required'],
                'precio'=>['required', 'numeric'],
                'imagen'=>['nullable'],
                'audio'=>['nullable'],
                'video'=>['nullable'],
                'descripcion'=>['required'],
            ];
        } else {
            return [
                'empresa_id'=>['sometimes','required', 'integer'],
                'name'=>['sometimes','required'],
                'precio'=>['sometimes','required', 'numeric'],
                'imagen'=>['sometimes','nullable'],
                'audio'=>['sometimes','nullable'],
                'video'=>['sometimes','nullable'],
                'descripcion'=>['sometimes','required'],
            ];
        }
    }
 
}
