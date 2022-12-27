<?php

namespace Database\Factories;

use App\Models\Empresa;
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
            'empresa_id'=> Empresa::factory(),
            'name' =>$this->faker->domainName(),
            'precio'=>$this->faker->numberBetween(100,10000),
            'imagen'=>$this->faker->url(),
            'audio'=>$this->faker->url(),
            'video'=>$this->faker->url(),
            'descripcion'=>$this->faker->text()
        ];
    }
}
