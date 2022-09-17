<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function getProducts(Product $product)
    {
        return response()->json(Product::all(),200);
    }

    public function getProductById($id)
    {
        $product = Product::find($id);
        if(is_null($product)){
            return response()->json(['message' => 'produit introuvable'], 404);

        }
        return response()->json(Product::find($id));

    }

    public function addProduct(Request $request)
    {
        $product = Product::create($request->all());
        return response()->json($product,201);
    }

    public function getProductByCategory($id){
        $products = Category::findOrFail($id)->products;
        return response()->json($products, 201);
    }

    public function newArrivals(){
        $products = Product::orderBy('id', 'DESC')->get()->take(10);
        return response()->json($products, 201);
    }

    public function bestSellers(){
        $products = Product::orderBy('qte_sold', 'DESC')->take(10)->get();
        return response()->json($products, 201);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product, $id)
    {
        $product = Product::find($id);
        if(is_null($product)){
            return response()->json(['message' => 'produit introuvable'], 404);

        }
        $product->update($request->all());
        return response()->json($product,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product, $id)
    {
        $product = Product::find($id);
        if(is_null($product)){
            return response()->json(['message' => 'produit introuvable'], 404);

        }
        $product->delete();
        return response(null,201);
    }
}
