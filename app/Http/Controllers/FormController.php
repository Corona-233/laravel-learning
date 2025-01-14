<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Forms/Index', [
            //
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'message' => 'string|max:255',
            'name' => 'required|string|max:255',
            'sex' => 'required|string|max:255',
            'outlook' => 'required|string|max:255',
            'classs' => 'required|string|max:255',
            'ethnic' => 'required|string|max:255',
            'duty' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'hobby' => 'required|string|max:255',
            'synopsis' => 'required|string|max:255',
            'assumption' => 'required|string|max:255',
        ]);
 
        $request->user()->forms()->create($validated);
 
        return redirect(route('forms.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Form $form)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Form $form)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Form $form)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Form $form)
    {
        //
    }
}
