/**
 * Jhonatan Samuel Martinez Hernandez 
 * Ficha 2675859
 * Analisis y Desarrollo de Software
 * Año 2024
 */

import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <>

      <nav class="navbar navbar-expand-lg bg-body-terciary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav align-items-end">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Contacto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Desarrollador</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container text-center mb-5">
        <h1 class="mb-5 mt-3">Bienvenidos</h1>
        <h3>Este es el sistema para gestion de procesos del negocio</h3>
        <br></br>
        <p>Selecciona el área a la que perteneces</p>

      </div>

      <div class="container">
        <div class="row justify-content-center mx-4">


          <Link className="btn btn-primary text-decoration-none col-12 col-md-5 p-4 mb-4 mx-2" to="clients" >clientes</Link>
          <Link className="btn btn-primary text-decoration-none col-12 col-md-5 p-4 mb-4 mx-2" to="clients" >Inventario</Link>
          <Link className="btn btn-primary text-decoration-none col-12 col-md-5 p-4 mb-4 mx-2" to="clients" >Facturas</Link>
          <Link className="btn btn-primary text-decoration-none col-12 col-md-5 p-4 mb-4 mx-2" to="clients" >Agendación de Servicios</Link>

        </div>
      </div>

      <div class="mb-3 mt-5 text-center">
        <p>Jhonatan Samuel Martinez Hernandez <a href="https://github.com/dev-jsmh">git account</a></p>
      </div>
    </>

  );

};