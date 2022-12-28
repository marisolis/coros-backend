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
    public $nombre_paquete;
    public $Tipo_evento;
    public $Fecha;
    public $Hora;
    public $Lugar;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($nombre_cliente, $nombre_paquete, $Tipo_evento, $Fecha, $Hora, $Lugar)
    {
        $this -> nombre_cliente = $nombre_cliente;
        $this -> nombre_paquete = $nombre_paquete;
        $this -> Tipo_evento = $Tipo_evento;
        $this -> Fecha = $Fecha;
        $this -> Hora = $Hora;
        $this -> Lugar = $Lugar;
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
        $nombre_paquete="nombre_paquete";
        $Tipo_evento="Tipo_evento";
        $Fecha="Fecha";
        $Hora="Hora";
        $Lugar="Lugar";
        return $this->view('mail',['nombre_cliente'=>$nombre_cliente,'nombre_paquete'=>$nombre_paquete,'Tipo_evento'=>$Tipo_evento,'Fecha'=>$Fecha,'Hora'=>$Hora,'Lugar'=>$Lugar]);
    }
}