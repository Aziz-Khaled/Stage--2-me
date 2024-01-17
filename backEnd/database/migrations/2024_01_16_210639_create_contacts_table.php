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
        // Création de la table "contacts" pour stocker les informations de contact
        Schema::create('contacts', function (Blueprint $table) {
            // Identifiant unique de chaque contact, auto-incrémenté
            $table->bigIncrements('id');
            // Nom du contact
            $table->string('name');
            // Adresse e-mail du contact
            $table->string('email');
            // Numéro de téléphone du contact
            $table->string('phoneNumber');
            // Sujet du message de contact, stocké en tant que texte
            $table->text('subject');
            // Description détaillée du message de contact, stockée en tant que texte
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
