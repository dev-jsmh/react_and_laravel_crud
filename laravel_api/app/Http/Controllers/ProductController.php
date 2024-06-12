<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ProductModel;
use Exception;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    // get all products
    public function index()
    {
        try {
            $ListOfProducts = ProductModel::all();

            if ($ListOfProducts->count() === 0) {
                $data = [
                    'message' => 'There are not registered products by the moment',
                    'products' => $ListOfProducts,
                    'status' => 200
                ];
                return response()->json($data, 200);
            }
            // return and array with all products coming from data base
            return response()->json($ListOfProducts, 200);
        } catch (Exception $ex) {
            // return the catch error 
            return response()->json($ex, 500);
        }
    }

    // get an specified product 
    public function store(Request $request)
    {
        try {
            $newProduct = new ProductModel();
            //  set to the product the information coming from the request
            $newProduct->product_code = $request->product_code;
            $newProduct->name = $request->name;
            $newProduct->model = $request->model;
            $newProduct->description = $request->description;
            $newProduct->stock = $request->stock;
            // validate file not empty
            if (!empty($request->image)) {

                // generate a new name for the image gotten from the post request 
                //
                // example = 1717227327_fresa.jpeg
                $image_name = time() . '.' . $request->file('image')->getClientOriginalExtension();
                // store the image in the "storage/public/images" folder with the preveously generated name
                $request->file('image')->storeAs('public/images', $image_name);

                // set the path url to the product data
                $newProduct->image_url = 'http://localhost:8000/storage/images/' . $image_name;
            }

            // insert the product into the data base
            $newProduct->save();

            return response()->json($newProduct, 201);
        } catch (Exception $ex) {

            $error = [
                'message' => $ex,
                'status' => 500
            ];

            return response()->json($error, 500);
        }
    }

    // post a new product 
    public function show(String $id)
    {
        try {
            $desiredProduct = ProductModel::find($id);
            // checke if the product variable is not empty
            if (!empty($desiredProduct)) {

                $data = [
                    'message' => 'the product with id: ' .  $id . ' was successfully found',
                    'product' => $desiredProduct,
                    'status' => 201
                ];
                // return the response
                return response()->json($data, 201);
            } else { // if product is empty ( not found ) run code below
                $data = [
                    'message' => 'Not possible to find the product with id: ' .  $id,
                    'status' => 404
                ];
                return response()->json($data, 404);
            }
        } catch (Exception $ex) { // if the is an exception then, handle it here
            $error = [
                'message' => $ex,
                'status' => 404
            ];
            // return the response
            return response()->json($error, 404);
        }
    }

    // modify product info
    public function update(String $id, Request $request)
    {
        try {
            $desiredProduct = ProductModel::find($id);
            // checke if the product variable is not empty
            if (!empty($desiredProduct)) {

                $desiredProduct->product_code = $request->product_code;
                $desiredProduct->name = $request->name;
                $desiredProduct->model = $request->model;
                $desiredProduct->description = $request->description;
                $desiredProduct->stock = $request->stock;

                // validate file not empty
                if (!empty($request->image)) {

                    // generate a new name for the image gotten from the post request 
                    //
                    // example = 1717227327_fresa.jpeg
                    $image_name = time() . '.' . $request->file('image')->getClientOriginalExtension();
                    // store the image in the "storage/public/images" folder with the preveously generated name
                    $request->file('image')->storeAs('public/images', $image_name);

                    // set the path url to the product data
                    $desiredProduct->image_url = 'http://localhost:8000/storage/images/' . $image_name;

                    // delete the old image from the "storage/public/images" folder

                }


                $desiredProduct->save();

                $data = [
                    'message' => 'The product with id: ' .  $id . ' was updated successfully',
                    'product' => $desiredProduct,
                    'status' => 201
                ];
                // return the response
                return response()->json($data, 201);
            } else { // if product is empty ( not found ) run code below
                $data = [
                    'message' => 'Not possible to find the product with id: ' .  $id,
                    'status' => 404
                ];
                return response()->json($data, 404);
            }
        } catch (Exception $ex) { // if the is an exception then, handle it here
            $error = [
                'message' => $ex,
                'status' => 500
            ];
            // return the response
            return response()->json($error, 500);
        }
    }

    // delete a product by its id
    public function destroy(String $id)
    {
        try {
            $deleted = ProductModel::destroy($id);

            if ($deleted) {
                return response()->json("product " . $id . " delete successfully ", 200);
            } else {
                return response()->json("not possible to delete the product " . $id, 500);
            }
        } catch (Exception $ex) {
            $data = [
                'error' => $ex,
                'message' => "something happended when trying to delte the product " . $id,

            ];

            return response()->json($data, 500);
        }
    }

    public function getImages()
    {

        try {

            $images = Storage::allFiles('public/images');
            // response
            return response()->json($images, 200);
        } catch (Exception $ex) {
            return response()->json($ex, 500);
        }
    }
}
