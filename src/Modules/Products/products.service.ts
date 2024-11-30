import { TProduct } from "./products.interface";
import { Product } from "./products.model";




const createProductIntoDB = async ( productData: TProduct) =>{
    const product = new Product(productData);
    const result = await product.save();
    return result;
}


export const ProductServices = {
    createProductIntoDB
}