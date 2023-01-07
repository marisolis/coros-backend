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
            $table->unsignedBigInteger('paquete_id');
            $table->unsignedBigInteger('usuario_id');
            $table->unsignedBigInteger('empresa_id');
            $table->string('Tipo_evento');
            $table->string('Forma_de_pago');
            $table->date('Fecha');
            $table->time('Hora');
            $table->string('Lugar');
            $table->timestamp('fecha_contrato');

            $table->foreign('paquete_id')->references('id')->on('paquetes');
            $table->foreign('usuario_id')->references('id')->on('users');
            $table->foreign('empresa_id')->references('id')->on('empresas');
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