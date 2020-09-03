import { IProduct } from './types';

//é a requisição para adicionar o produto ao carrinho, se passar. Se passar pela checagem de estoque eu disparo a proxima action 
export function addProductToCartRequest(product: IProduct) { 
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product,
    }
  }
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: {
      product,
    }
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    payload: {
      productId,
    }
  }
}