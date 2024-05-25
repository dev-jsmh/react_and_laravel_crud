/**
 * Jhonatan Samuel Martinez Hernandez 
 * Ficha 2675859
 * Analisis y Desarrollo de Software
 * Año 2024
 */
import env from '../../env';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import BackButton from "./BackButton";
import ClientModel from '../../models/ClientModel';
import Spinner from '../../components/spinner';

// view that has a form where I can modify  
// information of a specifique client by its id

function ModifyClient() {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [client, setClient] = useState(new ClientModel());
    // implement useState to create a object that will contain error messages for each input field
    const [errors, setErrors] = useState({});
    // ====== for use in the future const [neighborhoods, setNeighborhoods] = useState([]);
    // take the client id from url 
    const { id } = useParams();

    // =========== make call to clients endpoint and search a specific client by its id =======
    useEffect(() => {
        // http://localhost:8080/api/v1/clients/:id
        axios.get(env.mainUrl + "/clients/" + id)

            // print result in console when I got it 
            .then(res => {
                console.log(res.data)
                // store client fetch from api in a state variable 
                setClient(res.data.client);
            })// print error message if error happends
            .catch(error => {
                console.log(error);

            });
    }, []);

    // =========== make call to neighborhoods endpoint and get a list of them =======
   /** useEffect(() => {
        // http://localhost:8080/api/v1/clients/:id
        axios.get(env.mainUrl + "/neighborhoods")

            // print result in console when I got it 
            .then(res => {
                console.log(res.data)
                // store client fetch from api in a state variable 
                setNeighborhoods(res.data);
            })// print error message if error happends
            .catch(error => {
                console.log(error);

            });
    }, []);
    */

    // ======= make put request to clients/:id/ endpoint and modify previous client data for more recent one =======
    function putClient(data, id) {
        setLoading(true);
        axios.put( env.mainUrl + "/clients/" + id , data)
            .then(res => {
                console.log(res.data);
                setTimeout(() => {
                    setLoading(false);
                    navigate("/clients/" + id + "/details");
                }, 4000)
            })
            .catch(error => {
                console.log("Modifying client data proces was not successfully finished!", error);
                setTimeout(() => {
                    setLoading(false);
                }, 4000);

                setErrors(prevState => {
                    return { ...prevState, api: error }
                });
            })
    };

    // function to handle change event of inputs 
    const handleInput = (event) => { // pass the event generated when input changes as an argument
        //desctructor here the event for accessing the name and  values of it
        const { name, value } = event.target;

        // set a new client object using the setClient function return by its hook
        setClient({
            // make a copy of the client object
            ...client,
            // access the name attribute of the input that has changed 
            // in order to modify it and also get the value of the input form 
            // to set it in the copy of client object
            [name]: value

        });
    };

    //  ======================= validate essencial fields =======================
    const validateForm = (client) => {

        // create other object with error messages
        const foundErros = {};

        if (client.name === "" || client.name === undefined) {
            foundErros.name = "The name is mandatory";
        };
        if (client.lastname === "" || client.lastname === undefined) {
            foundErros.lastname = "The last name is mandatory";
        };
        if (client.phone === "" || client.phone === undefined) {
            foundErros.phone = "The phone is mandatory";
        };
        if (client.address === "" || client.address === undefined) {
            foundErros.address = "The address is mandatory";
        };

       /* ====== use this functionaliti in the future ======
        if (client.neighborhood?.id === "" || client.neighborhood === undefined) {
            foundErros.address = "The address is mandatory";
        };
        */
       
        // take the error that have been found in the form and 
        // store them in the errors object 
        setErrors(foundErros);
        // validates if the number of errors in the object is equal to cero 
        // and return the result either it is true or false
        return Object.keys(foundErros).length === 0;
    };


    // ======================= handle form  information =======================
    function handleForm(ev) {
        ev.preventDefault();
        // create a new cliente instance and set the values from the 
        //form inputs to corresponding fields in the model class

        // if result is true, it means the form is valid
        const isValid = validateForm(client);

        if (isValid) {
            console.log(client);
            // call the postClient function to send data to back-end
            putClient(client, id);
            console.info("! Put request made successfully !")
        } else {
            console.warn("There are some missing data !");
            console.warn(errors);
        }

    };

    return (
        <>
            <BackButton />
            <h3 className="mt-3" >Modificar información del cliente</h3>

            {/** /** show a custome message when there is an error with the API */}
            {errors.api?.code && (
                <div style={{ color: "red" }}>
                    <p>{errors.api?.code} Error de conección con la API</p>
                    <p>El servidor no esta disponible en este momento. Intente luego nuevamente.</p>

                </div>
            )}
            { /** execute a function to handle the form when submit event is generate */}
            <form onSubmit={(ev) => { handleForm(ev) }} className="form-group mb-3">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="mb-3">
                            <label className="form-label" for="id">CC</label>
                            <input
                                className="form-control"
                                id="id"
                                name='id'
                                type="number"
                                value={id}
                                disabled />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label" for="name">Nombre</label>
                            <input
                                className="form-control"
                                id="name"
                                name='name'
                                type="text"
                                value={client.name}
                                onChange={(e) => { handleInput(e) }} />
                            {errors.name && (<p style={{ color: "red" }} > {errors.name}</p>)}
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label" for="lastname">Apellido</label>
                            <input
                                className="form-control"
                                id="lastname"
                                name='lastname'
                                type="text"
                                value={client.lastname}
                                onChange={(e) => { handleInput(e) }} />
                            {errors.lastname && (<p style={{ color: "red" }} > {errors.lastname}</p>)}

                        </div>
                        
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="mb-3">
                            <label className="form-label" for="phone">Teléfono</label>
                            <input
                                className="form-control"
                                id="phone"
                                name='phone'
                                type="text"
                                value={client.phone}
                                onChange={(e) => { handleInput(e) }} />
                            {errors.phone && (<p style={{ color: "red" }} > {errors.phone}</p>)}

                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="address">Dirección</label>
                            <input
                                className="form-control"
                                id="address"
                                name='address'
                                type="text"
                                value={client.address}
                                onChange={(e) => { handleInput(e) }} />
                            {errors.address && (<p style={{ color: "red" }} > {errors.address}</p>)}

                        </div>
                       

                    </div>
                </div>
                <div className="mb-3 text-center">
                    <button className="btn btn-success mx-1" type="submit" >
                        {loading ? <Spinner/> : "Modificar"}
                        </button>
                    <Link className="btn btn-danger mx-1" to={"/clients/" + id + "/details"} >Cancelar</Link>
                </div>
            </form>

        </>
    );
};

export default ModifyClient;