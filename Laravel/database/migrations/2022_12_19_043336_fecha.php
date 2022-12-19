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
        Schema::create('fecha',function(Blueprint $table){
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->unsignedBigInteger('id_mes');
            $table->unsignedBigInteger('id_dia');
            $table->unsignedBigInteger('id_hora');
            $table->unsignedBigInteger('id_proveedor');
            $table->boolean('disponibilidad');

            $table->foreign('id_mes')->references('id')->on('mes');
            $table->foreign('id_dia')->references('id')->on('dia');
            $table->foreign('id_hora')->references('id')->on('hora');
            $table->foreign('id_proveedor')->references('id')->on('proveedor');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fecha');
    }
};
