<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class correo extends Mailable
{
    use Queueable, SerializesModels;

    public $nombre_cliente;
    public $numero_telefono;
    public $correo_cliente;
    public $nombre_paquete;
    public $Tipo_evento;
    public $Lugar;
    public $Fecha; 
    public $Hora;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($nombre_cliente, $numero_telefono, $correo_cliente, $nombre_paquete, $Tipo_evento, $Lugar, $Fecha, $Hora)
    {
        $this -> nombre_cliente = $nombre_cliente;
        $this -> numero_telefono = $numero_telefono;
        $this -> correo_cliente = $correo_cliente;
        $this -> nombre_paquete = $nombre_paquete;
        $this -> Tipo_evento = $Tipo_evento;
        $this -> Lugar = $Lugar;
        $this -> Fecha = $Fecha;
        $this -> Hora = $Hora;
    }

    /**
     * Build the message.
     *
     * @return $this
     * 
     * @throws \Exception
     */
    public function build(){
        $nombre_cliente="nombre_cliente";
        $numero_telefono="numero_telefono";
        $correo_cliente="correo_cliente";
        $nombre_paquete="nombre_paquete";
        $Tipo_evento="Tipo_evento";
        $Lugar="Lugar";
        $Fecha="Fecha";
        $Hora="Hora";
        return $this->view('mail',['nombre_cliente'=>$nombre_cliente, $numero_telefono=>'numero_telefono','correo_cliente'=>$correo_cliente,'nombre_paquete'=>$nombre_paquete,'Tipo_evento'=>$Tipo_evento, 'Lugar'=>$Lugar,'Fecha'=>$Fecha,'Hora'=>$Hora])->subject("Contrato Nuevo")->from("203722@ids.upchiapas.edu.mx","EstanciaII");
    }
}