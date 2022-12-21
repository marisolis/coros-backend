<?php

namespace Database\Factories;
use App\Models\Proveedor;
use App\Models\Dia;
use App\Models\Hora;
use App\Models\Mes;
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
            'proveedor_id'=> Proveedor::factory(),
            'mes_id'=> Mes::factory(),
            'dia_id'=> Dia::factory(),
            'hora_id'=> Hora::factory(),
            'disponibilidad' =>$this->faker->boolean(),
        ];
    }
}
