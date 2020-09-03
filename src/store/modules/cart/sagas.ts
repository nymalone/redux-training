import { ActionTypes } from './types';
import { IState } from './../../index';
import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { addProductToCartRequest, addProductToCartSuccess, addProductToCartFailure } from "./actions";
import { AxiosResponse } from 'axios';
import api from '../../../services/api';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
   
    return state.cart.items.find(item => item.product.id ===product.id)?.quantity ?? 0
  }); 
  
  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`) // dessa forma configuro uma chamada api dentro do redux saga

  // vou verificar 
  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product))
  } else {
    yield put(addProductToCartFailure(product.id))
  }
};

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
]);
