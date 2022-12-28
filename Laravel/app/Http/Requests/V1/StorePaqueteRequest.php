<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;

class StorePaqueteRequest extends FormRequest
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
        return [
            'empresa_id'=>['required', 'integer'],
            'name'=>['required'],
            'precio'=>['required', 'numeric'],
            'imagen'=>['nullable'],
            'audio'=>['nullable'],
            'video'=>['nullable'],
            'descripcion'=>['required'],
        ];
    }
}
