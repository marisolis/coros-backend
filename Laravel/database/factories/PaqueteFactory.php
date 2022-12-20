<?php

namespace Database\Factories;
use App\Models\Proveedor;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Paquete>
 */
class PaqueteFactory extends Factory
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
            'name' =>$this->faker->domainName(),
            'precio'=>$this->faker->numberBetween(100,10000),
            'archivos'=>$this->faker->url(),
            'descripcion'=>$this->faker->text()
        ];
    }
}
