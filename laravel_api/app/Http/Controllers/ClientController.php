<?php

/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Development
 * 2675859
 * SENA
 * 2024
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use Exception;

class ClientController extends Controller
{
    //=============== index ==================
    public function index()
    {
        try {
            $listOfClient = Client::all();

            return response()->json($listOfClient);
        } catch (Exception $ex) {
            $data = [
                "message" => "Not possible to renerate a list of all clients. ",
                "status" => 500,
                "error" => $ex
            ];
            return response()->json($data, 500);
        }
    }

    //=============== store ==================
    public function store(Request $request)
    {
        try {
            // create new instance of the class client
            $newClient = new Client();
            // assing all the attributes needed 
            $newClient->name = $request->name;
            $newClient->lastname = $request->lastname;
            $newClient->phone = $request->phone;
            $newClient->address = $request->address;
            $newClient->save();


            $data = [
                "message" => "client created successfully",
                "status" => 201,
                "data" => $newClient
            ];
            // return success message and the found client
            return response()->json($data, 201);
            // If there is any kind of execption throw error message
        } catch (Exception $ex) {
            throw new Exception("It was not possible to create the new client: " . $ex);
        };
    }
    //=============== show ===================

    public function show(String $id)
    {
        $desiredClient = Client::find($id);
        // validates if the client was found
        if (!empty($desiredClient)) {
            // execute the code below if this is true
            $data = [
                "message" => "Client found successfully",
                "status" => 201,
                "data" => $desiredClient
            ];
            return response()->json($data, 201);
        } else {
            // If client was not found return error message
            $data = [
                "error" => "Not possible to find the client with id: " . $id . ".",
                "status" => 404
            ];
            return response()->json($data, 404);
        }
    }
    //=============== update =================
    public function update(String $id, Request $request)
    {
        try {
            // looks for the client in data base
            $desiredClient = Client::find($id);
            // checked that the variable is not empty
            if (!empty($desiredClient)) {
                // set the updated fields from the request
                $desiredClient->name = $request->name;
                $desiredClient->lastname = $request->lastname;
                $desiredClient->phone = $request->phone;
                $desiredClient->address = $request->address;
                // save the modified client data
                $desiredClient->save();

                $data = [
                    "message" => "Client modified successfully.",
                    "status" => 201,
                    "data" => $desiredClient
                ];
                // return client with message
                return response()->json($data, 201);
            } else {
                $data = [
                    "message" => "Not possible to find the specified client.",
                    "status" => 404,
                ];
                // return error with message
                return response()->json($data, 404);
            }
        } catch (Exception $ex) {

            $data = [
                "message" => "Not possible to modified client with id: " . $id . ".",
                "status" => 500,
                "error" => $ex
            ];

            // return json response 
            return response()->json($data, 500);
        }
    }

    //=============== delete =================
    public function destroy(String $id)
    {

        try {
            // delete a specified client by its id
            Client::destroy($id);
            // 
            $data = [
                "message" => "Client N°: " . $id . " deleted successfully.",
                "status" => 200
            ];
            // Return success message 
            return response()->json($data, 200);
            // If there is any kind of exception return error message
        } catch (Exception $ex) {
            $data = [
                "message" => "Not possible to delete client N°: " . $id . ".",
                "status" => 500,
                "error" => $ex
            ];
            // return exception message 
            return response()->json($data, 500);
        }
    }
}
/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Development
 * 2675859
 * SENA
 * 2024
 */
