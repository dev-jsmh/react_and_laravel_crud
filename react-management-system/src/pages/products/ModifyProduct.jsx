/**
 * Jhonatan Samuel Martinez Hernandez 
 * Ficha 2675859
 * Analisis y Desarrollo de Software
 * Año 2024
 */

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';
import env from '../../env';

export default function ModifyProduct() {

    
    const [image, setImage] = useState();
    const { id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    // object that encapsulates required product information 
    const [old_Product, setOld_Product] = useState({
        product_code: "",
        name: "",
        model: "",
        image_url: "",
        description: "",
        stock: 0
    });
// object to store update information
    const updatedProduct = {
        product_code: "",
        name: "",
        model: "",
        image: {},
        description: "",
        stock: 0
    };

    useEffect(
        () => {
            axios.get(`${env.mainUrl}/products/${id}`)
                .then(res => {
                    console.log(res.data);
                    setOld_Product(res.data.product)
                })
                .catch(error => console.log(error))
        }, []
    );

    function handleInput(ev) {
        const { name, value } = ev.target;

        setOld_Product(
            {
                ...old_Product,
                [name]: value
            }
        );
    }

    // makes a put request to modify the current product information
    // pass and object of product as a parameter
    function putProduct(productData) {

        axios({
            method: 'post',
            url: `${env.mainUrl}/products/${id}`,
            data: productData, 
            headers: {'Content-Type': 'multipart/form-data'}
        })
        .then((res) => console.log(res.data))
        .catch(error => console.log(error));
    };
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

    function handleForm(ev) {
        ev.preventDefault();
        // check if the information about the product collect from the form is valid
        const formIsValid = validateForm(old_Product);
        // if true 
        if (formIsValid) {
            // _-------- set the values from the old fetch product to the update product
            /*
            add this _method to solve the problem when 
            trying to make put request to modify an 
            existing product information
            */
            updatedProduct._method = 'put';
            updatedProduct.product_code = old_Product.product_code;
            updatedProduct.name = old_Product.name;
            updatedProduct.model = old_Product.model;
            updatedProduct.description = old_Product.description;
            updatedProduct.stock = old_Product.stock;
            // adding image here below 
            updatedProduct.image = image;
            // print te update object 
           console.log(updatedProduct);
            // make put request and send data to the back-end 
            putProduct(updatedProduct);
            setTimeout(() => {
                // finally navigate to the products table
                navigate(`/products/${id}/details`);
            }, 2500);

        } else {
            console.warn("There are some missing fields !");
            console.warn(errors);
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-md bg-dark sticky-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to={`/products/${id}/details`}>
                        <i className="bi-arrow-left" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}></i>
                    </Link>
                </div>
            </nav>
            <div className="container">
                <h3 className='mt-3' > Modificar Información del producto </h3>

                <img src={old_Product?.image_url} alt={old_Product?.name} style={{ height: 10 + 'rem', borderRadious: 0.3 + 'rem' }} />
                { /** execute a function to handle the form when submit event is generate */}
                <form onSubmit={(ev) => { handleForm(ev) }} className="form-group">
                    <div className="row mt-3">
                        <div className="col-md-6 col-12">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="product_id">Id</label>
                                <input className="form-control" id="product_id" name='product_id' type="number" value={old_Product.id} disabled />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="product_code">Codigo producto</label>
                                <input onChange={(ev) => { handleInput(ev) }} className="form-control" id="product_code" type="text" name='product_code' value={old_Product?.product_code} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="product_name">Nombre</label>
                                <input onChange={(ev) => { handleInput(ev) }} className="form-control" id="product_name" type="text" name="name" value={old_Product.name} />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-5 mb-3">
                                    <label className="form-label" htmlFor="">Modelo</label>
                                    <input onChange={(ev) => { handleInput(ev) }} className="form-control" id="" type="text" name="model" value={old_Product.model} />
                                </div>
                                <div className="col-5 mb-3">
                                    <label className="form-label" htmlFor="">Cantidad inicial</label>
                                    <input onChange={(ev) => { handleInput(ev) }} className="form-control" id="" type="number" name="stock" value={old_Product.stock} />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            {/**  
                             * <div className="d-flex justify-content-between">
                                <div className="col-5 mb-3">
                                    <label className="form-label" htmlFor="product_category">Categoria</label>
                                    <select className="form-control" id="product_category" type="text">
                                        <option>Planta de agua</option>
                                        <option>Cartuchos</option>
                                        <option>Botones</option>
                                        <option>Cables</option>
                                    </select>
                                </div>
                                <div className="col-5 mb-3">
                                    <label className="form-label" htmlFor="product_category_id">Id categoria</label>
                                    <input className="form-control" id="product_category_id" type="text" />
                                </div>
                            </div>
                            */}

                            <div className="mb-3">
                                <label className="form-label" htmlFor="product_description">Descripción</label>
                                <textarea onChange={(ev) => { handleInput(ev) }} className="form-control" id="product_description" name="description" value={old_Product.description}></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="product_image">imagen</label>
                                <input onChange={(ev) => { setImage(ev.target.files[0]) }} className="form-control" id="product_image" type="file" name='image' />
                            </div>
                            <div className="mb-3">
                                { // render the product image if this existe 


                                     image !== undefined && (  // else render a predefined default image

                                            <img className="text-center"

                                                src={URL.createObjectURL(image)}
                                                style={{ height: 5 + "rem", borderRadius: 0.4 + 'rem' }} alt="purificador de aguas" />

                                        ) 
                                }


                            </div>
                        </div>
                    </div>
                    <div className="mb-3 text-center">
                        <button className="btn btn-success mx-1" type="submit">Añadir</button>
                        <Link className="btn btn-danger mx-1" to={`/products/${id}/details`}>Cancelar</Link>
                    </div>
                </form>
            </div>
        </>

    );

}