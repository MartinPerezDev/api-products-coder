import { products } from '../data/products.js';
import { createError } from '../utils/createError.js';
import { successResponse } from '../utils/apiResponse.js';

export function getProducts(req, res) {
  return successResponse(res, {
    message: 'Product List',
    payload: products
  });
};

export function getProductById(req, res, next) {
  const { pid } = req.params;

  const product = products.find((item)=> item.id === pid );
  if(!product) {
    return next(createError("Product not found", 404));
  };

  return successResponse(res, {
    message: 'Product by id',
    payload: product
  });
};

export function createProduct(req, res) {
  const { title, price, stock } = req.body;

  if ( !title || !price || !stock ) {
    throw createError('Invalid product data', 400);
  };

  const product = {
    id: `p${products.length + 1}`,
    title,
    price,
    stock,
  };

  products.push(product);

  return successResponse(res, {
    statusCode: 201,
    message: 'Product created',
    payload: product
  });
};

export function updateProduct(req, res, next) {
  const { pid } = req.params;
  const { title, price, stock } = req.body;

  const productIndex = products.findIndex((item) => item.id === pid);

  if (productIndex === -1) {
    return next(createError('Product not found', 404));
  }

  const updatedProduct = {
    ...products[productIndex],
    title,
    price,
    stock,
  };

  products[productIndex] = updatedProduct;

  return successResponse(res, {
    message: 'Product updated',
    payload: updatedProduct
  });
};

export function deleteProduct(req, res, next) {
  const { pid } = req.params;

  const productIndex = products.findIndex((item) => item.id === pid);

  if (productIndex === -1) {
    return next(createError('Product not found', 404));
  }

  const deletedProduct = products[productIndex];
  products.splice(productIndex, 1);

  return successResponse(res, {
    message: 'Product deleted',
    payload: deletedProduct
  });
}