<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;
    
     /**
     * Les attributs qui peuvent être mass assignable.
     * 
     * Ces attributs peuvent être remplis en utilisant les méthodes create ou update.
     * La protection contre la mass assignment aide à prévenir
     * l'écrasement accidentel de propriétés sensibles du modèle. :
     */ 
    protected $fillable = ['name' , 'email' ,'phoneNumber' , 'subject'] ; 
}
