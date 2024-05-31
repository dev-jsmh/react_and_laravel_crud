
import { Link } from 'react-router-dom';

// this images if temporal
import productImg from '../../../public/img/product_4.jpeg';

export default function ModifyProduct() {



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

                <img src={productImg} alt="" style={{height: 10 + 'rem', borderRadious: 0.3 + 'rem'}} />
                { /** execute a function to handle the form when submit event is generate */}
                <form onSubmit={(ev) => { handleForm(ev) }} className="form-group">
                    <div className="row mt-3">
                        <div className="col-md-6 col-12">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="product_code">Codigo producto</label>
                                <input className="form-control" id="product_code" name='product_code' type="number" disabled />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="product_name">Nombre</label>
                                <input className="form-control" id="product_name" type="text" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-5 mb-3">
                                    <label className="form-label" htmlFor="">Modelo</label>
                                    <input className="form-control" id="" type="text" />
                                </div>
                                <div className="col-5 mb-3">
                                    <label className="form-label" htmlFor="">Cantidad inicial</label>
                                    <input className="form-control" id="" type="number" />
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
                                <label className="form-label" htmlFor="">Descripción</label>
                                <textarea className="form-control" id=""></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="">imagen</label>
                                <input className="form-control" id="" type="file" />
                            </div>
                            <div className="mb-3">
                                <img src="../../src/images/WhatsApp Image 2022-09-07 at 11.54.51 AM (1).jpeg" alt=""
                                    style={{ height: "5rem" }} />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 text-center">
                        <button className="btn btn-success mx-1" type="submit">Añadir</button>
                        <Link className="btn btn-danger mx-1" to={"/products/8/details"}>Cancelar</Link>
                    </div>
                </form>
            </div>
        </>

    );

}