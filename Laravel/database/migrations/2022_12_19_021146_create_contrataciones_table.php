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
        Schema::create('contrataciones',function(Blueprint $table){
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->unsignedBigInteger('id_paquete');
            $table->unsignedBigInteger('id_cliente');
            $table->string('Tipo_evento');
            $table->string('Forma_de_pago');
            $table->date('Fecha');
            $table->time('Hora');
            $table->string('Lugar');
            $table->date('fecha_apartado');

            $table->foreign('id_paquete')->references('id')->on('paquetes');
            $table->foreign('id_cliente')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contrataciones');
    }
};
