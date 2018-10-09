import axios from 'axios';

import {
  GET_PRODUCTS_BY_SELL,
  GET_PRODUCTS_BY_ARRIVAL,
  GET_BRANDS,
  GET_WOODS,
  GET_PRODUCTS_TO_SHOPS,
} from './types';
import { PRODUCT_SERVER } from '../utils/misc';

export function getProductsBySell() {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
    .then(resonse => resonse.data);

  return {
    type: GET_PRODUCTS_BY_SELL,
    payload: request,
  };
}

export function getProductsByArrival() {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
    .then(resonse => resonse.data);

  return {
    type: GET_PRODUCTS_BY_ARRIVAL,
    payload: request,
  };
}

export function getBrands() {
  const request = axios
    .get(`${PRODUCT_SERVER}/brands`)
    .then(resonse => resonse.data);

  return {
    type: GET_BRANDS,
    payload: request,
  };
}

export function getWoods() {
  const request = axios
    .get(`${PRODUCT_SERVER}/woods`)
    .then(resonse => resonse.data);

  return {
    type: GET_WOODS,
    payload: request,
  };
}

export function getProductsToShops(
  skip,
  limit,
  filters = [],
  previousState = []
) {
  const data = {
    skip,
    limit,
    filters,
  };
  const request = axios.post(`${PRODUCT_SERVER}/shop`, data).then(resonse => ({
    size: resonse.data.size,
    articles: resonse.data.articles,
  }));

  return {
    type: GET_PRODUCTS_TO_SHOPS,
    payload: request,
  };
}
