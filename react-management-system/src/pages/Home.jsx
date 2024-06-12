/**
 * Jhonatan Samuel Martinez Hernandez 
 * Ficha 2675859
 * Analisis y Desarrollo de Software
 * Año 2024
 */


import authorDeveloper from '../../public/img/jhonatan_author_developer_edit.jpg';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <>

      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <img class="navbar-brand" src={authorDeveloper} style={{height: "5rem", borderRadius: "50%"}}></img>
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
          <Link className="btn btn-primary text-decoration-none col-12 col-md-5 p-4 mb-4 mx-2" to="products" >Inventario</Link>
          <Link className="btn btn-primary text-decoration-none col-12 col-md-5 p-4 mb-4 mx-2" to="development" >Facturas</Link>
          <Link className="btn btn-primary text-decoration-none col-12 col-md-5 p-4 mb-4 mx-2" to="development" >Agendación de Servicios</Link>

        </div>
      </div>

      <div class="mb-3 mt-5 text-center">
        <p>Jhonatan Samuel Martinez Hernandez <a href="https://github.com/dev-jsmh">git account</a></p>
      </div>
    </>

  );

};