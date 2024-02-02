<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Contact::select (['name' , 'email' , 'subject' , 'created_at'])->get() ; 
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'phoneNumber' => 'required',
            'subject' => 'required',
        ]);

        $contact = Contact::create($request->only(['name', 'email', 'phoneNumber', 'subject']));
        return response()->json([
            $contact, 201 ,
            "message" => "contact added successfully"
        ]); 
    }
}
