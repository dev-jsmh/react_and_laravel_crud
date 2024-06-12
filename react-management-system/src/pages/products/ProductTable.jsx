/**
 * Jhonatan Samuel Martinez Hernandez 
 * Ficha 2675859
 * Analisis y Desarrollo de Software
 * Año 2024
 */

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Spinner from '../../components/spinner';

// this images if temporal
import defaultProductImg from '../../../public/img/product_4.jpeg';
import axios from 'axios';

import env from '../../env';

export default function ProductTable() {

    const [loading, setLoading] = useState(true);

    const [searchParameter, setSearchParameter] = useState("");
    // array of products 
    const [products, setProducts] = useState([]);

    // method to make get request and get all products from data base
    useEffect(() => {
        axios.get(env.mainUrl + '/products')
            .then( // if request is successfull set the reponse to product
                (res) => {
                    setProducts(res.data)
                    setLoading(false);
                }
            )// if request fails print error in console
            .catch(error => console.warn(error));
    }, []);


    // search bar input handler 
    function SearchInputHandler(ev) {

        let lowerCase = ev.target.value.toLowerCase();
        setSearchParameter(lowerCase);
    }

    // the filtered products ---------------------------------------------------
    const filteredProducts = products.filter((p) => {


        if (searchParameter == "") { // return the same object when the input is equal to empty string
            return p;
        }
        else if (p.name.toLowerCase().includes(searchParameter)) {
            return p;
        }
        else {
            return p.model.toLowerCase().includes(searchParameter);
        }
    });

    // ---------------------------------------------------
    return (
        <>
            <nav className="navbar navbar-expand-md bg-dark sticky-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" >Productos</a>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav align-items-end">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>Home</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">
                <h2 className="mt-3 text-center">Productos</h2>
                {/**  ==== boton de crear registros  === */}
                <Link className="btn btn-success" type="button" to={"create"}>
                    <i className="bi bi-plus-circle"></i> Crear producto
                </Link>
                {/**  ==== busqueda por categoria  === */}
                {/**  ==== barra de busqueda de registros  === */}
                <div className="row mt-3 justify-content-between mb-2">

                    {/**  ==== busquedad por otros parametros  === */}
                    <div className="col-12 col-md-5 d-flex mb-2">
                        <input onChange={(ev) => { SearchInputHandler(ev) }} className="form-control" type="text" id="search" placeholder="Nombre, Modelo" />
                        <button className="btn btn-success mx-2" type="submit">Search</button>
                    </div>

                </div>
                {/** ==== Jhonatan Samuel Martinez Hernandez ==== */}
                <h3 className="mb-3">Lista de productos</h3>
                {/** ===== product container ===== */}
                <div className="scrollable" style={{ height: "500px" }}>
                    <div className="row">
                        {/** -- product item -- */

                            // if exists products in the data base render a card for each one
                            filteredProducts.map(product => {
                                return (
                                    <div key={product?.id} className="col-sm-12 col-md-4 col-lg-3 p-2">
                                        <div className="card card-bg-light">
                                            <div className="card-body ">
                                                <div className="col text-center mb-2">
                                                    {
                                                        product?.image_url ?
                                                            (
                                                                <img src={product?.image_url}
                                                                    alt="purificador de aguas" style={{ height: "9rem", borderRadius: "0.5rem" }} />
                                                            )
                                                            : (
                                                                <img src={defaultProductImg} style={{ height: "9rem", borderRadius: "0.5rem" }} />
                                                            )
                                                    }

                                                </div>
                                                <div className="col">
                                                    <p>Id: {product?.id}</p>
                                                    <p>Codigo: {product?.product_code}</p>
                                                    <p>Nombre: {product?.name}</p>
                                                    <p>Modelo: {product?.model}</p>
                                                    <p>Unidades disponibles: {product?.stock}</p>
                                                </div>
                                                {/** ==== buttons for manage products ==== */}
                                                <div className="col">
                                                    <div className="d-flex justify-content-center">
                                                        <Link className="btn btn-primary m-2" to={product?.id + "/details"}>Detalles</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                            })
                        }
                        {
                            // if the array  of filter products has cero elements and the page has finished loading
                            filteredProducts.length == 0 && loading == false && (<p className="text-center my-5" style={{ fontSize: "1.5rem" }}>No hay productos que concuerden con la busqueda</p>)
                        }

                        {loading && (
                            <div className='text-center'>
                                <Spinner></Spinner>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>);
}