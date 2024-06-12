/**
 * Jhonatan Samuel Martinez Hernandez 
 * Ficha 2675859
 * Analisis y Desarrollo de Software
 * Año 2024
 */

// ================ Imports goes here ================
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// custom colors css
 import './assets/css/app_main_custom_colors.css';
// ================ Bootstrap CSS ================
import './assets/scss/custom_app_main.css';
import './assets/js/bootstrap.bundle.min.js';
import './assets/icons/font/bootstrap-icons.min.css';

// ================ components imports ================
import Home from './pages/Home';
import ClientsHome from './pages/clientModule/ClientsHome';
import ClientTable from './pages/clientModule/ClientTable';
import CreateClient from './pages/clientModule/CreateClient';
import DetailsClient from './pages/clientModule/DetailsClient'
import ModifyClient from './pages/clientModule/ModifyClient';
// ========== components related to products ==========
import CreateProduct from './pages/products/CreateProduct.jsx';
import ProductDetails from './pages/products/ProductDetails.jsx';
import ModifyProduct from './pages/products/ModifyProduct.jsx';
import ProductRootPage from './pages/products/ProductRootPage';
import ProductTable from './pages/products/ProductTable.jsx';
import NotFound from './pages/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} ></Route>
        {/** ======== routes related to clientes ======== */}
        <Route path='clients' element={<ClientsHome />} >
          <Route index element={<ClientTable />} />
          <Route path='create' element={<CreateClient />}></Route>
          <Route path=':id/modify' element={<ModifyClient />}></Route>
          <Route path=':id/details' element={<DetailsClient />}></Route>
        </Route>
        {/** ======== routes related to products ======== */}
        <Route path='products' element={<ProductRootPage/>}>
          <Route index element={<ProductTable/>} ></Route>
          <Route path='create' element={<CreateProduct />} ></Route>
          <Route path=':id/details' element={<ProductDetails/>} />
          <Route path=':id/modify' element={<ModifyProduct/>} ></Route>
        </Route>

        <Route path='*' element={<NotFound />} ></Route>

      </Routes>
    </BrowserRouter>
  )
}
/**
 * Jhonatan Samuel Martinez Hernandez 
 * Ficha 2675859
 * Analisis y Desarrollo de Software
 * Año 2024
 */

export default App
