<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mes>
 */
class MesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $array = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        $arrayNumMes = ["01","02","03","04","05","06","07","08","09","10","11","12"];
        return [
            'name' =>$array[rand(0,11)],
            'num_mes' =>$arrayNumMes[rand(0,11)],
        ];
    }
}
