<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

use Illuminate\Http\Request;
use App\Models\templates;

class TemplatesController extends Controller
{
    
    public function index()
    {
        return templates::select('id', 'name',	'description',	'requirements' , 'features' , 'image' , 'price')->get();
    }

    public function showById(string $id)
    {
    $template = templates::findOrFail($id);
    return response()->json([
        'data' => $template,
        'message' => 'Template details fetched successfully'
    ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'requirements' => 'required',
            'features' => 'required',
            'image' => 'required|image',
            'price'=> 'required'
        ]);

        $image = $request->file('image');
        $imageName = $image->getClientOriginalName(); // Use the original file name
        $path = 'images/templatesPhotos'; // Adjust the path as needed
        $image->move($path, $imageName);
        
        $template = templates::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'requirements' => $request->input('requirements'),
            'features' => $request->input('features'),
            'price' =>$request->input('price'),
            'image' => $path.'/'.$imageName, 
        ]);

    return response()->json([
            'data' => $template,
            'message' => 'Template added successfully'
        ]  , 201);
    }
    
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, templates $templates, string $id)
    {
        $template = templates::findOrFail($id);

        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'requirements' => 'required',
            'features' => 'required',
            'price' => 'required',
            'image' => 'image',
        ]);
    
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = $image->getClientOriginalName(); 
            $path = 'images/templatesPhotos'; 
            $image->move($path, $imageName);
            
        }
    
        $template->name = $request->input('name');
        $template->description = $request->input('description');
        $template->requirements = $request->input('requirements');
        $template->features = $request->input('features');
        $template->price = $request->input('price');
        $template->image = $path.'/'.$imageName;

        $template->save();
    
        return response()->json([
            'data' => $template,
            'message' => 'Template updated successfully'
        ]);
    }

    public function destroy(string $id)
{
    $template = templates::findOrFail($id);

    if ($template->image) {
        $exist = Storage::disk('public')->exists("images/templatesPhotos/{$template->image}");
        if ($exist) {
            Storage::disk('public')->delete("images/templatesPhotos/{$template->image}");
        }
    }

    $template->delete();

    return response()->json([
        'message' => 'Template deleted successfully',
        'deleted_template' => $template
    ]);
}
}
