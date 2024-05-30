



export default function ModifyProduct() {



    function handleForm(ev) {
        ev.preventDefault();
        console.log(ev.target);
        console.log(ev.target.product_code.value);
    };

    return (
        <>

            <h3 className="mt-3" >Añadir Producto</h3>
            { /** execute a function to handle the form when submit event is generate */}
            <form onSubmit={(ev) => { handleForm(ev) }} class="form-group">
                <div class="row">
                    <div class="col-md-6 col-12">
                        <div class="mb-3">
                            <label class="form-label" for="product_code">Codigo producto</label>
                            <input class="form-control" id="product_code" name='product_code' type="number" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="product_name">Nombre</label>
                            <input class="form-control" id="product_name" type="text" />
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="col-5 mb-3">
                                <label class="form-label" for="">Modelo</label>
                                <input class="form-control" id="" type="text" />
                            </div>
                            <div class="col-5 mb-3">
                                <label class="form-label" for="">Cantidad inicial</label>
                                <input class="form-control" id="" type="number" />
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6">

                        <div class="d-flex justify-content-between">
                            <div class="col-5 mb-3">
                                <label class="form-label" for="product_category">Categoria</label>
                                <select class="form-control" id="product_category" type="text">
                                    <option>Planta de agua</option>
                                    <option>Cartuchos</option>
                                    <option>Botones</option>
                                    <option>Cables</option>
                                </select>
                            </div>
                            <div class="col-5 mb-3">
                                <label class="form-label" for="product_category_id">Id categoria</label>
                                <input class="form-control" id="product_category_id" type="text" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="">Descripción</label>
                            <textarea class="form-control" id=""></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="">imagen</label>
                            <input class="form-control" id="" type="file" />
                        </div>
                        <div class="mb-3">
                            <img src="../../src/images/WhatsApp Image 2022-09-07 at 11.54.51 AM (1).jpeg" alt=""
                                style={{ height: "5rem" }} />
                        </div>
                    </div>
                </div>
                <div class="mb-3 text-center">
                    <button class="btn btn-success mx-1" type="submit">Añadir</button>
                    <a class="btn btn-danger mx-1" href="">Cancelar</a>
                </div>
            </form>

        </>

    );

}