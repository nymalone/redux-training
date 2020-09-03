import { all } from "redux-saga/effects";

import cart from './cart/sagas';

//function* é um generator, é como se fosse um async function... no final das contas o async await são transformados em generators
export default function* rootSaga() {
  // yield -> ja que o * seria o async, o yield seria o await 
  return yield all([
    cart,
  ])
}