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
            $table->unsignedBigInteger('empresa_id');
            // $table->unsignedBigInteger('mes_id');
            // $table->unsignedBigInteger('dia_id');
            // $table->unsignedBigInteger('year_id')->default('2023');
            // $table->unsignedBigInteger('hora_id');
            $table->string('fecha');
            $table->string('hora');
            $table->boolean('disponibilidad')->default(1);

            $table->foreign('empresa_id')->references('id')->on('empresas');
            // $table->foreign('mes_id')->references('id')->on('mes');
            // $table->foreign('dia_id')->references('id')->on('dias');
            // $table->foreign('hora_id')->references('id')->on('horas');
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