<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
class MailController extends Controller
{
    public function sendEmail(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'to' => 'required|email',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $to = $request->input('to');
        $subject = $request->input('subject');
        $message = $request->input('message');

        Mail::to($to)->send(new SendMail($subject, $message));

        return response()->json(['message' => 'Email sent successfully']) ; 

    }
}
