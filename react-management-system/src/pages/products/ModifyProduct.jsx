/**
 * Jhonatan Samuel Martinez Hernandez 
 * Ficha 2675859
 * Analisis y Desarrollo de Software
 * Año 2024
 */

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';
// this images if temporal
import productImg from '../../../public/img/product_4.jpeg';
import ProductModel from '../../models/ProductModel';
import env from '../../env';

export default function ModifyProduct() {

    const [product, setProduct] = useState(new ProductModel());
    const [image, setImage] = useState({});
    const { id } = useParams();

    useEffect(
        () => {
            axios.get(`${env.mainUrl}/products/${id}`)
                .then(res => {
                    console.log(res.data);
                    setProduct(res.data.product)
                })
                .catch(error => console.log(error))
        }, []
    );

    function handleForm(ev) {
        ev.preventDefault();
        console.log(ev.target);
        console.log(ev.target.product_code.value);
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
                <h3 className='mt-3' > Modificar Información del producto </h3>

                <img src={product?.image_url} alt="" style={{ height: 10 + 'rem', borderRadious: 0.3 + 'rem' }} />
                { /** execute a function to handle the form when submit event is generate */}
                <form onSubmit={(ev) => { handleForm(ev) }} className="form-group" encType='multipart/form-data' >
                    <div className="row mt-3">
                        <div className="col-md-6 col-12">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="product_id">Id</label>
                                <input className="form-control" id="product_id" name='product_id' type="number" value={product.id} disabled />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="product_code">Codigo producto</label>
                                <input className="form-control" id="product_code" name='product_code' type="text" value={product?.product_code} disabled />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="product_name">Nombre</label>
                                <input className="form-control" id="product_name" type="text" value={product.name} />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-5 mb-3">
                                    <label className="form-label" htmlFor="">Modelo</label>
                                    <input className="form-control" id="" type="text" value={product.model} />
                                </div>
                                <div className="col-5 mb-3">
                                    <label className="form-label" htmlFor="">Cantidad inicial</label>
                                    <input className="form-control" id="" type="number" value={product.stock} />
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
                                <textarea className="form-control" id="product_description" value={product.description}></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="">imagen</label>
                                <input onChange={(ev) => { setImage(ev.target.files[0]) }} className="form-control" id="" type="file" name='image' />
                            </div>
                            <div className="mb-3">
                                { // render the product image if this existe 


                                    product?.image_url ?
                                        (
                                            <img className="text-center"
                                                src={product?.image_url}
                                                style={{ height: 5 + "rem", borderRadius: 0.4 + 'rem' }} alt="purificador de aguas" />

                                        ) : (  // else render a predefined default image

                                            <img className="text-center"
                                                src={productImg}
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