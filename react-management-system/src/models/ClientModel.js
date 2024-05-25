
/**
 * Jhonatan Samuel Martinez Hernandez 
 * Ficha 2675859
 * Analisis y Desarrollo de Software
 * Año 2024
 */


/**
 * 
 * import { NeighborhoodModel } from "./NeighborhoodModel";
import { ServiceModel } from "./ServiceModel";
import { ProductModel } from "./ProductModel";

 * 
 */

export default class ClientModel {

    id;
    name;
    lastname;
    phone;
    address;
    // constructor with basic client contact data
    constructor(
        name,
        lastname,
        phone,
        address,
    ) {
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
        this.address = address;


    }
}
