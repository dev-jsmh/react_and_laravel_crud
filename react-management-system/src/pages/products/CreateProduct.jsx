/**
 * Jhonatan Samuel Martinez Hernandez 
 * Ficha 2675859
 * Analisis y Desarrollo de Software
 * Año 2024
 */

import env from '../../env';
import defaultImage from '/img/product_4.jpeg';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';


// view that has a form where I can create products
// and add their information to data base
export function CreateProduct() {

    const navigate = useNavigate();
    // objet that contains all errors coming from the form
    const [errors, setErrors] = useState({});

    const [image_url, setImage_url] = useState();
    // object that encapsulates required product information 
    const [productData, setProductData] = useState({
        name: "",
        model: "",
        image:  {},
        description: "",
        stock: 0
    });
    // ======== handle inputs of the form ========
    function handleInput(ev) {
        // destructor the event
        const { name, value } = ev.target;
        // set the change attribute to the product
        setProductData({
            ...productData,
            [name]: value
        }
        );
    }

    // ========== post request ==========
    function postProduct(product) {

        const config = { 'headers': {'Content-Type': 'multipart/form-data'}};
        // send post request to back-end
        axios.post(env.mainUrl + '/products', product, config )
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }

    // pass as argument the object productData
    function validateForm(productData) {
        // create an other object to store the possible errors
        const formErrors = {};
        // validate the required fields in the form
        if (productData.name == null || productData.name == "") {
            formErrors.name = "El nombre es obligatorio";
        }
        if (productData.model == null || productData.model == "") {
            formErrors.model = "El modelo es obligatorio";
        }
        if (productData.description == null || productData.description == "") {
            formErrors.description = "La descripción es obligatoria";
        }
        if (productData.stock == null || productData.stock == 0) {
            formErrors.stock = "La cantidad debe ser mayor a 0";
        }
        // set the new errors
        setErrors(formErrors);

        // if this expression is true that means there is no errors
        return Object.keys(formErrors).length == 0;
    }

    // =========== proccess the form 
   async function handleForm(ev) {
        ev.preventDefault();

        let valideFormData = validateForm(productData);
        //
        if (valideFormData == true) {
            console.log(image_url); // ======== try to print the url of the image get from the form input type file
            
            // add the image_url property to the productData object before posting
            productData.image = image_url;
            await postProduct(productData);
            navigate("/products");

        } else {
            console.warn("ther are some missing fields");
            console.warn(errors);
        }

    };

    return (
        <>
            <nav className="navbar navbar-expand-md bg-dark sticky-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to="../">
                        <i className="bi-arrow-left" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}></i>
                    </Link>
                </div>
            </nav>

            <div className="container">
                <h3 className="mt-3" >Añadir Producto</h3>
                { /** execute a function to handle the form when submit event is generate */}
                <form onSubmit={(ev) => { handleForm(ev) }} className="form-group col-sm-12 col-md-10 col-lg-10" encType='multipart/form-data' >
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="mb-3">
                                <label className="form-label" for="product_code">Codigo producto</label>
                                <input onChange={(ev) => { handleInput(ev) }} className="form-control" id="product_code" name='product_code' type="text" value={productData.productCode} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" for="product_name">Nombre</label>
                                <input onChange={(ev) => { handleInput(ev) }} className="form-control" id="product_name" type="text" name='name' value={productData.name} />
                           {  errors.name && ( <p style={{color: "red"}} > { errors.name }</p> ) }
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-5 mb-3">
                                    <label className="form-label" for="product_model">Modelo</label>
                                    <input onChange={(ev) => { handleInput(ev) }} className="form-control" id="product_model" type="text" name="model" value={productData.model} />
                           {  errors.model && ( <p style={{color: "red"}} > { errors.model }</p> ) }
                               
                                </div>
                                <div className="col-5 mb-3">
                                    <label className="form-label" for="">Cantidad inicial</label>
                                    <input onChange={(ev) => { handleInput(ev) }} className="form-control" id="" type="number" name="stock" value={productData.stock} />
                           {  errors.stock && ( <p style={{color: "red"}} > { errors.stock }</p> ) }
                                
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            {/*
                             <div className="d-flex justify-content-between">
                                <div className="col-5 mb-3">
                                    <label className="form-label" for="product_category">Categoria</label>
                                    <select className="form-control" id="product_category" type="text">
                                        <option>Planta de agua</option>
                                        <option>Cartuchos</option>
                                        <option>Botones</option>
                                        <option>Cables</option>
                                    </select>
                                </div>
                                <div className="col-5 mb-3">
                                    <label className="form-label" for="product_category_id">Id categoria</label>
                                    <input className="form-control" id="product_category_id" type="text" />
                                </div>
                            </div>
                             */}

                            <div className="mb-3">
                                <label className="form-label" for="product_description">Descripción</label>
                                <textarea onChange={(ev) => { handleInput(ev) }} className="form-control" id="product_description" name="description" value={productData.description}></textarea>
                           {  errors.description && ( <p style={{color: "red"}} > { errors.description }</p> ) }
                            
                            </div>
                            <div className="mb-3">
                                <label className="form-label" for="product_image">imagen</label>
                                {/* used a separated hook for the image so i can access the uploaded file */}
                                <input onChange={(ev) => { setImage_url(ev.target.files[0]) }} className="form-control" id="product_image" type="file" name="image_url" />
                            </div>
                            <div className="mb-3">
                                {
                                    image_url ? (
                                <img src={URL.createObjectURL(image_url)} style={{ height: "5rem" }} />

                                ) : (
                                <img src={defaultImage} style={{ height: "5rem" }} />
                                )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 text-center">
                        <button className="btn btn-success mx-1" type="submit">Añadir</button>
                        <Link className="btn btn-danger mx-1" to={'../'} >Cancelar</Link>
                    </div>
                </form>
            </div>
        </>

    );
};

export default CreateProduct;