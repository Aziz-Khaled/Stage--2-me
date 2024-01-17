<?php

namespace App\Http\Controllers;

use App\Models\Feedbacks;
use Illuminate\Http\Request;

class FeedbacksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Feedbacks::select (['name' , 'email' ,'feedbackDescirption'])->get() ; 
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'feedbackDescirption' => 'required',

        ]);

        
        $contact = Feedbacks::create($request->only(['name' , 'email' ,'feedbackDescirption']));
        return response()->json($contact, 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(Feedbacks $feedbacks)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feedbacks $feedbacks)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feedbacks $feedbacks)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feedbacks $feedbacks)
    {
        //
    }
}
