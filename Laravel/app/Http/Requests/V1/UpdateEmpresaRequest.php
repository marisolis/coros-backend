<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEmpresaRequest extends FormRequest
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
                'name'=>['required'],
                'num_Telefono'=>['required'],
                'informacion'=>['required'],
                'email'=>['required', 'email'],
                'imagen'=>['nullable'],
            ];
        } else {
            return [
                'name'=>['sometimes', 'required'],
                'num_Telefono'=>['sometimes','required'],
                'informacion'=>['sometimes','required'],
                'email'=>['sometimes','required', 'email'],
                'imagen'=>['sometimes','nullable'],
            ];
        }
    }
    protected function prepareForValidation() {
        if($this->numTelefono){
            $this->merge([
                'num_Telefono' => $this->numTelefono
            ]);
        }
    }
}
