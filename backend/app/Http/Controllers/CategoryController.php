<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getCategories(Category $category)
    {
        $categories = Category::all();

        return response()->json($categories, 201);
    }
    
    public function getCategoryByName($name)
    {
        $category = Category::where('name', $name)->first();

        return response()->json(['products'=>$category->products],201);
    }
}
