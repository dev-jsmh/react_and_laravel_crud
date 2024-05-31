/**
 * Jhonatan Samuel Martinez Hernandez 
 * Ficha 2675859
 * Analisis y Desarrollo de Software
 * Año 2024
 */

import { Link } from 'react-router-dom';

// this images if temporal
import productImg from '../../../public/img/product_4.jpeg';


export default function ProductTable() {


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
                        <input className="form-control" type="text" id="search" placeholder="Nombre, categoria" />
                        <button className="btn btn-success mx-2" type="submit">Search</button>
                    </div>

                </div>
                {/** ==== Jhonatan Samuel Martinez Hernandez ==== */}
                <h3 className="mb-3">Lista de productos</h3>
                {/** ===== product container ===== */}
                <div className="scrollable" style={{ height: "500px" }}>
                    <div className="row">
                        {/** -- product item -- */}
                        <div className="col-sm-12 col-md-4 col-lg-3 p-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="col text-center mb-2">
                                        <img src={productImg}
                                            style={{ height: "9rem", borderRadius: "1rem" }} alt="purificador de aguas" />
                                    </div>
                                    <div className="col">
                                        <p>id: 1823</p>
                                        <p>Nombre: Purificador de agua </p>
                                        <p>Modelo: Manzana verde</p>
                                        <p>Unidades disponibles: 15</p>
                                    </div>
                                    {/** ==== buttons for manage products ==== */}
                                    <div className="col">
                                        <div className="d-flex justify-content-center">
                                            <Link className="btn btn-primary m-2" to={"8/details"}>Detalles</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>);
}