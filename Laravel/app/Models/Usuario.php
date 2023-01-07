<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    protected $table = 'users';
    protected $fillable = [
        'name',
        'email',
        'phone',
        'password',
        'type',
    ];

    public function contrataciones(){
        return $this->hasMany(Contrataciones::class);
    }
}
