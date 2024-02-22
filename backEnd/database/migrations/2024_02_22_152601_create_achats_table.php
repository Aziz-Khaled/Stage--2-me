<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('achats', function (Blueprint $table) {
            $table->id();
            $table->string ("Full_Name") ; 
            $table->string ("Cardholder_Name") ; 
            $table->integer ("Card_Number") ; 
            $table->string ("Card_Type") ;
            $table->Date ("Expiry") ; 
            $table->integer("cvv") ; 
            $table->foreignId( 'id_template')->constrained('templates');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('achats');
    }
};
