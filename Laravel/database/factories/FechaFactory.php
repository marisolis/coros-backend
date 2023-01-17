<?php

namespace Database\Factories;
use App\Models\Empresa;
use App\Models\Dia;
use App\Models\Hora;
use App\Models\Mes;
use App\Models\Year;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Fecha>
 */
class FechaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
       
        return [
            'empresa_id'=> Empresa::factory(),
            // 'mes_id'=> Mes::factory(),
            // 'dia_id'=> Dia::factory(),
            // 'hora_id'=> Hora::factory(),
            // 'year_id'=> Year::factory(),
            'fecha'=> $this->faker->date(),
            'hora'=> $this->faker->time(),
            'disponibilidad' =>$this->faker->boolean(),
        ];
    }
}
