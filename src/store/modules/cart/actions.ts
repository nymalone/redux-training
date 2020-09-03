import { IProduct, ActionTypes } from './types';

//é a requisição para adicionar o produto ao carrinho, se passar. Se passar pela checagem de estoque eu disparo a proxima action 
export function addProductToCartRequest(product: IProduct) { 
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    }
  }
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    }
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    }
  }
}