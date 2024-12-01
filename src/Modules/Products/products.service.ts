import { TProduct } from "./products.interface";
import { Product } from "./products.model";




const createProductIntoDB = async ( productData: TProduct) =>{
    const product = new Product(productData);
    const result = await product.save();
    return result;
}

const getAllProductsFromDB = async(searchTerm: string)=>{
    if(searchTerm){
        const result = await Product.find({$or:[{name: new RegExp(searchTerm, 'i')}, {category: new RegExp(searchTerm, 'i')}, {brand: new RegExp(searchTerm, 'i')}]}, {isDeleted: 0, __v: 0})
        return result;

    }else{
        const result = await Product.find({}, {isDeleted: 0, __v: 0})
        return result;
    }

    
}


export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB
}