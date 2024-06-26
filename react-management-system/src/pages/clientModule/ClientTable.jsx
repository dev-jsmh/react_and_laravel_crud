/**
 * Jhonatan Samuel Martinez Hernandez 
 * Ficha 2675859
 * Analisis y Desarrollo de Software
 * Año 2024
 */

import axios from 'axios';
import { useEffect, useState, onChange } from 'react';
import { Link } from 'react-router-dom';

// enviroment 
import env from '../../env';
import Spinner from '../../components/spinner';

// This is the home view of the module that 
//takes care of managing client's información


function ClientTable() {
    const [error, setError] = useState({})
    const [loadingClients, setLoadingClients] = useState(true);
    const [clients, setClients] = useState([]);

    // input text from search bar 
    const [inputText, setInputText] = useState("");

    function inputHandler(ev) {

        let lowerCaseWord = ev.target.value.toLowerCase();
        setInputText(lowerCaseWord);


    }

    const filteredClients = clients.filter(
        (client) => {
            if (inputText == "") {
                return client

            } else if (client.name.toLowerCase().includes(inputText)) {
                // transform to lower case an checked if includes the parameter
                return client

            } else {
                // transform to lower case an checked if includes the parameter
                return client.lastname.toLowerCase().includes(inputText)
            }

        }
    );

    useEffect(() => {

        axios.get(env.mainUrl + "/clients")
            .then(response => {
                setClients(response.data);
                console.log(response.data)

                // change variable value to false  when program has finished loading clients from the api
                setLoadingClients(false)
            })
            .catch(errors => {
                console.log(errors);
                // set error object a new message if client could have not been charged
                setError(errors);
                // change variable value to false  when program has finished loading clients from the api
                setLoadingClients(false)
            });


    }, []);

    // route definition for cliente module goes here
    return (

        <>
            { /** <!-- this links to a view where I'll find a form where I can add a new client to the data base  -->*/}
            <Link class="btn btn-success mt-2" to="create" ><i class="bi bi-plus-circle"></i> Añadir cliente</Link>

            { /** <!--barra de busqueda de registros--> */}
            <div class="row mt-4 justify-content-center mb-2">

                { /** <!-- busquedad por otros parametros --> */}
                <div class="col-12 col-md-5 d-flex mb-2">

                    <input onChange={(ev) => { inputHandler(ev) }} class="form-control" type="text" placeholder="Nombre, Apellido" />
                    <button class="btn btn-success mx-2" type="submit"><i class="bi bi-search"></i></button>
                </div>
            </div>

            <h1 class="mb-3 text-center">Clientes</h1>
            {/** barra separadora */}
            <div style={{ height: " 0.5rem", backgroundColor: "rgb(173, 173, 173)" }}></div>
            {/** clients*/}
            <div class="scrollable" style={{ height: "400px", overflowY: "scroll" }}>
                <div id="clients">
                    <table class="table table-light table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Cc</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/**
                            *  <tr>
                                <th scope="row">1241312</th>
                                <td>Luis</td>
                                <td>Mogollon</td>
                                <td>Los caracoles</td>
                                <td>
                                    <Link className='btn btn-info' to="1/details" ><i class="bi bi-eye"></i></Link>
                                </td>
                            </tr>
                            */}

                            {     // iterate all the array of clients get from the api call 
                                filteredClients.map(
                                    // return a tr element for each client of the 
                                    //array and print its corresponding data need for the table
                                    client => (
                                        <tr key={client.id}>
                                            <th scope='row' >{client.id}</th>
                                            <td>{client.name}</td>
                                            <td>{client.lastname}</td>
                                            <td>{client.phone}</td>
                                            <td>
                                                <Link className='btn btn-info' to={client.id + "/details"} ><i class="bi bi-eye"></i></Link>
                                            </td>
                                        </tr>

                                    )
                                )
                            }

                        </tbody>
                    </table>
                    {// if there is no cliente that match the search params print a message saying it to the client
                   filteredClients == 0 && loadingClients == false && inputText !== "" && (<p className="text-center my-5" style={{fontSize: "1.5rem"}}>No hay clientes que concuerden con la busqueda "{inputText}"</p>)

                    }
                    {// checke if there exist clients in the list
                        loadingClients && (
                            <div className="text-center m-5">
                                <Spinner />
                            </div>)}
                    { /** show Net Work error  */

                        error.message && loadingClients == false && (<p className='text-center' style={{ color: "red", fontSize: "24px" }}> {error.name} || {error.code} || {error.message}</p>)
                    }
                </div>
            </div>
        </>

    );

};

export default ClientTable;