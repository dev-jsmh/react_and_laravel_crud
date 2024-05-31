import { Link } from 'react-router-dom';

// this images if temporal
import productImg from '../../../public/img/product_4.jpeg';

function ProductDetails() {


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
                        <img className="text-center"
                            src={productImg}
                            style={{ height: 10 + "rem", borderRadius: 1 + 'rem' }} alt="purificador de aguas" />
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="mb-3">
                            <p>Codigo producto: 18323</p>
                        </div>
                        <div className="mb-3">
                            <p>Nombre: Purificador de agua</p>
                        </div>
                        <div className="mb-3">
                            <p>Modelo: Manzana verde</p>
                        </div>

                    </div>
                    <div className="col-md-4 col-12">
                        <div className="col-5 mb-3">
                            <p>Valor de compra: 150.000</p>
                        </div>
                        <div className="col-5 mb-3">
                            <p>Unidades disponibles: 12</p>
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
                            <textarea className="form-control" id=""></textarea>
                        </div>

                    </div>
                    <div className="col-md-6 col-12 text-center">
                        {/**  <!-- compra de producto --> */}
                        <button className="btn btn-success my-5 mx-2" data-bs-toggle="modal"
                            data-bs-target="#modal_add_stock" data-bs-dismiss="modal">
                            <i className="bi bi-plus-circle"></i>
                            comprar
                        </button>
                        {/**  <!-- modificar producto --> */}
                        <Link className="btn btn-success my-5 mx-2" type="button" to={"/products/8/modify"}>
                            <i className="bi bi-save"></i>Modificar
                        </Link>
                    </div>
                </div>
            </div>

            {/** <!-- modal for add stock --> */}
            <div className="modal fade" id="modal_add_stock" data-bs-backdrop="static">
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
        </>
    );
}

export default ProductDetails