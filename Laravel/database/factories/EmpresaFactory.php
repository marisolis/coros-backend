<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Empresa>
 */
class EmpresaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' =>$this->faker->company(),
            'num_Telefono'=>$this->faker->phoneNumber(),
            'email'=>$this->faker->email(),
            'imagen'=>$this->faker->url(),
            'informacion'=>$this->faker->text()
        ];
    }
}
