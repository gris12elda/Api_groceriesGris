import Product  from '../models/products.model.js';

const productDAO = {};

productDAO.getAll = async () => {

    const Products = await Product.find();
    return Products;

}

productDAO.getOne = async (barcode) => {
    const product = await Product.findOne({barcode: barcode});
    return product;
}

productDAO.insertOne = async (product) => {
    return await Product.create(product);
}

productDAO.updateOne = async (barcode, product) => {
    return await Product.findOneAndUpdate({barcode: barcode}, product)
}

productDAO.deleteOne = async (barcode) => {
    return await Product.findOneAndDelete({barcode: barcode})
}

export default productDAO;