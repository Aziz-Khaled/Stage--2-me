<?php

namespace App\Http\Controllers;

use App\Models\achat;
use Illuminate\Http\Request;

class AchatController extends Controller
{

    public function index()
    {
        return achat::select('Full_Name','Cardholder_Name' , 'Card_Number' , 'Card_Type' , 'Expiry' ,'cvv', 'id_template' )->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'Full_Name' => 'required',
            'Cardholder_Name' => 'required',
            'Card_Number' => 'required',
            'Card_Type' => 'required',
            'Expiry' => 'required',
            'cvv'=> 'required',
            'id_template'=> 'required',
        ]);

        
        $achat = achat::create([
            'Full_Name' => $request->input('Full_Name'),
            'Cardholder_Name' => $request->input('Cardholder_Name'),
            'Card_Number' => $request->input('Card_Number'),
            'Card_Type' => $request->input('Card_Type'),
            'Expiry' =>$request->input('Expiry'),
            'cvv' => $request->input ('cvv') , 
            'id_template'=>$request->input ('id_template')
        ]);

    return response()->json([
            'data' => $achat,
            'message' => 'achat done successfully'
        ]  , 201);
    }
    
    }


