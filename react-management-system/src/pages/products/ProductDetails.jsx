/**
 * Jhonatan Samuel Martinez Hernandez 
 * Ficha 2675859
 * Analisis y Desarrollo de Software
 * Año 2024
 */

import env from '../../env';
import Spinner from '../../components/spinner';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';



// this images if temporal
import ProductModel from '../../models/ProductModel';
import productImg from '../../../public/img/product_4.jpeg';


function ProductDetails() {

    // extract the product id from the url 
    const { id } = useParams();
    const navigate = useNavigate();
    // product state 
    const [product, setProduct] = useState(new ProductModel());
    const [deleting, setDeletign] = useState(false);
    // Get request to fecth a product by its id
    useEffect(
        () => {

            axios.get(`${env.mainUrl}/products/${id}`)
                // print result in console
                .then(res => {
                    console.log(res.data),
                        // set the fetched product data to the product state variable
                        setProduct(res.data.product)
                }) // log the error to the console
                .catch(error => console.log(error))

        }, []);

    // ------------------- same function to close modals manually ----------------

    const closeModal = () => {
        /**
         *
        
                document.body.style = "";
                document.body.style.cssText = "";
                document.body.classList.remove("modal-open");
                 */
              
        document.getElementById("delete_product").classList.remove("show");
        document.getElementById("delete_product").style.display = "none";

    }
    // --------------------- functionality to delete product ---------------------
    const deleteProduct = () => {
        // change the value to true so the spinner is shown
        setDeletign(true);
        // make delete request
        axios.delete(`${env.mainUrl}/products/${id}`)
            .then((res) => {
                console.log(res);
                // when get the response than change the value 
                // to false so the spinner is not shown any more after 2 secunds
                setTimeout(() => {
                    setDeletign(false);
                    closeModal();
                    navigate("/products");
                }, 2000);

            })
            .catch(error => console.log(error));

    }

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

                <h3 className='mt-3' > Datos del producto </h3>

                <div className="row mt-3">
                    <div className="col-md-4 col-12 mb-2">

                        { // render the product image if this existe 


                            product?.image_url ?
                                (
                                    <img className="text-center"
                                        src={product?.image_url}
                                        style={{ height: 10 + "rem", borderRadius: 1 + 'rem' }} alt="purificador de aguas" />
                                ) : (  // else render a predefined default image
                                    <img className="text-center"
                                        src={productImg}
                                        style={{ height: 10 + "rem", borderRadius: 1 + 'rem' }} alt="purificador de aguas" />
                                )
                        }
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="mb-3">
                            <p>Id producto: {product.id}</p>
                        </div>
                        <div className="mb-3">
                            <p>Codigo producto: {product.product_code}</p>
                        </div>
                        <div className="mb-3">
                            <p>Nombre: {product.name}</p>
                        </div>
                        <div className="mb-3">
                            <p>Modelo: {product.model}</p>
                        </div>

                    </div>
                    <div className="col-md-4 col-12">
                        <div className="col-5 mb-3">
                            <p>Valor de compra: 150.000</p>
                        </div>
                        <div className="col-5 mb-3">
                            <p>Unidades disponibles: {product.stock} </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        {/**
                        * 
                        <div className="">
                            <div className="col mb-3">
                                <p>Categoria: Planta Purificadora</p>
                            </div>
                            <div className="col mb-3">
                                <p>id categoria: 2</p>
                            </div>
                        </div>
                        */}
                        <div className="mb-3">
                            <label className="form-label" htmlFor="">Descripción</label>
                            <textarea className="form-control" id="" value={product.description} >  </textarea>
                        </div>

                    </div>
                    {
                                deleting && (
                                    <div className="text-center p-4">
                                        <Spinner></Spinner>
                                    </div>
                                )
                            }
                    <div className="col-md-6 col-12 text-center">
                        {/**  <!-- compra de producto --> */}
                        <button className="btn btn-success my-5 mx-2" data-bs-toggle="modal"
                            data-bs-target="#modal_add_stock" data-bs-dismiss="modal">
                            <i className="bi bi-plus-circle"></i>
                            comprar
                        </button>
                        {/**  <!-- modificar producto --> */}
                        <Link className="btn btn-success my-5 mx-2" type="button" to={`/products/${id}/modify`}>
                            <i className="bi bi-save"></i>Modificar
                        </Link>

                        <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#delete_product"><i className='bi bi-trash'></i></button>
                    </div>
                </div>
            </div>

            {/** <!-- modal for add stock --> */}
            <div className="modal fade" id="modal_add_stock">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">compra de stock</h4>
                            {/** <!-- button for close modal windows --> */}
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>

                        <div className="modal-body">
                            <form action="" className="form-group">
                                <div className="row">

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="product_provider_id">Id proveedor</label>
                                        <select className="form-control" id="product_provider_id" type="number">
                                            <option selected>---</option>
                                            <option>1234</option>
                                            <option>3635</option>
                                            <option>333333</option>
                                            <option>444444</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="product_provider_name">Nombre
                                            proveedor</label>
                                        <select className="form-control" id="product_provider_name" type="text">
                                            <option selected>---</option>

                                            <option>juan camilo</option>
                                            <option>Roberto Enrique</option>
                                            <option>Luis mario</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="product_category_id">Cantidad</label>
                                        <input className="form-control" id="product_category_id" type="number" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="">Valor de compra</label>
                                        <input className="form-control" id="" type="text" />
                                    </div>
                                </div>
                                <div className="mb-3 text-center">
                                    <button className="btn btn-success" type="submit">comprar</button>
                                    <Link className="btn btn-danger" data-bs-dismiss="modal">Cancelar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            { /** modal to confirm delete action  */}
            <div className="modal fade" id="delete_product">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>¿ Esta seguro de querer eliminar el producto ?</p>
                           
                            <div className="text-center">
                                <button className='btn btn-primary mx-1' data-bs-dismiss="modal">NO</button>
                                <button className='btn btn-secondary mx-1' onClick={deleteProduct} data-bs-dismiss="modal">si</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProductDetails