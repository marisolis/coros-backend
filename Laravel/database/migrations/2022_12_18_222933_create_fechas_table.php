<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('fechas', function (Blueprint $table) {
            $table->id();
            $table->integer('empresa_id');
            $table->string('mes_id');
            $table->string('dia_id');
            $table->string('year_id')->default('2023');
            // $table->string('hora_id');
            $table->boolean('disponibilidad')->default(1);
            $table->timestamps();

            $table->foreign('empresa_id')->references('id')->on('empresas');
            $table->foreign('mes_id')->references('id')->on('mes');
            $table->foreign('dia_id')->references('id')->on('dias');
            $table->foreign('hora_id')->references('id')->on('horas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fechas');
    }
};