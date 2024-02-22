<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class achat extends Model
{
    use HasFactory;

    protected $fillable = ['Full_Name' , 'Cardholder_Name' ,'Card_Number' , 'Card_Type' , 'Expiry' ,'cvv' ,'id_template'  ] ; 

}
