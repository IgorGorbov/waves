import {
  GET_PRODUCTS_BY_ARRIVAL,
  GET_PRODUCTS_BY_SELL,
  GET_BRANDS,
  GET_WOODS,
  GET_PRODUCTS_TO_SHOPS,
  ADD_PRODUCT,
  CLEAR_PRODUCT,
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCTS_BY_ARRIVAL:
      return { ...state, byArrival: action.payload };
    case GET_PRODUCTS_BY_SELL:
      return { ...state, byShell: action.payload };
    case GET_BRANDS:
      return { ...state, brands: action.payload };
    case GET_WOODS:
      return { ...state, woods: action.payload };
    case GET_PRODUCTS_TO_SHOPS:
      return {
        ...state,
        toShop: action.payload.articles,
        toShopSize: action.payload.size,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        addProduct: action.payload,
      };

    case CLEAR_PRODUCT:
      return {
        ...state,
        addProduct: action.payload,
      };

    default:
      return state;
  }
}
