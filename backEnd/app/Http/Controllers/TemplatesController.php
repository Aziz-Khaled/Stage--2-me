<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

use Illuminate\Http\Request;
use App\Models\templates;

class TemplatesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
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
            'image' => 'required',
            'price'=> 'required'
        ]);


        $image = $request->file('image');
        $imageName = $image->getClientOriginalName(); // Use the original file name
        $path = 'images/templatesPhotos'; // Adjust the path as needed
        
        $template = templates::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'requirements' => $request->input('requirements'),
            'features' => $request->input('features'),
            'image' => $path.'/'.$imageName, 
            'price' =>$request->input('price'),
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
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'image' => 'nullable'
        ]);

        $templates->fill($request->post())->update();


        if ($request->hasFile('image')) {
            if ($templates->image) {
                $exist = Storage::disk('public')->exists("images/templatesPhotos/{$templates->image}"); // Adjust the path as needed
                if ($exist) {
                    Storage::disk('public')->delete("images/templatesPhotos/{$templates->image}"); // Adjust the path as needed
                }
            }
        }
        return response()->json([
            'message' => 'Item updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id , templates $template)
    {
        if ($template->image) {
            $exist = Storage::disk('public')->exists("images/templatesPhotos/{$template->image}");
            if ($exist) {
                Storage::disk('public')->delete("images/templatesPhotos/{$template->image}");
            }
        }
        
        $template->delete();
        return response()->json([
            'message' => 'Item deleted successfully',
            'deleted_template' => $template
        ]);
    }
}
