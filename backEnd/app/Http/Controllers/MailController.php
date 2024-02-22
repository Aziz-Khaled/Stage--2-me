<?php

namespace App\Http\Controllers;

use App\Mail\SendMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


class MailController extends Controller
{

    public function send(Request $request) {
        
        $request->validate([
            'to' => 'required|email',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);
    
        $email = $request->input('to');
        $sujet = $request->input('subject');
        $contenu = $request->input('message');
    
        if($this->isOnline()){
    
            $mail = new SendMail($email, $sujet, $contenu);
    
            // Utilize the from method to set the sender
            $mail->from($email , $email);
            $mail->replyTo($email, $email);
            
            // Send the email using send() after setting the sender
            Mail::to('mouhamedazizkhaled@gmail.com')->send($mail);
    
            return redirect()->back()->with('success','Votre email a été envoyé avec succès!');
        }
        else{
            return redirect()->back()->withInput()->with('Error','Check your internet connection');
        }
    }
    
    public function isOnline($site="https://www.youtube.com/") {
        if(@fopen($site,"r")){
            return true;
        }
        else{
            return false;
        }
    }
}
