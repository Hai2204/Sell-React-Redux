import * as Types from "../constants/ActionTypes";
import callApi from "../utils/apiCaller";

// fetch
export const fetchProductsRequest = () => {
  return async (dispatch) => {
    const response = await callApi("products", "GET", null);
    dispatch(actFetchProducts(response.data));
  };
};

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};
//delete
export const actDeleteRequest = (id) => {
  return async (dispatch) => {
    await callApi(`products/${id}`, "DELETE", null);
    dispatch(actDeleteProducts(id));
  };
};
export const actDeleteProducts = (id) => {
  return {
    type: Types.DELETE_PRODUCTS,
    id,
  };
};
// add
export const actAddProductRequest = (product) => {
  return async (dispatch) => {
    const response = await callApi("products", "POST", product);
    dispatch(actAddProduct(response.data));
  };
};
export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCTS,
    product,
  };
};
// edit
export const actUpdateProductRequest = (id) => {
  return async (dispatch) => {
    const response = await callApi(`/products/${id}`, "GET", null);
    dispatch(actUpdateProduct(response.data));
  };
};
export const actUpdateProduct = (product) => {
  return {
    type: Types.EDIT_PRODUCT,
    product,
  };
};
// update
export const actEditProductRequest = (product) => {
  return async (dispatch) => {
    const response = await callApi(`products/${product.id}`,'PUT',product);
    dispatch(actEditProduct(response.data));
  }
};
export const actEditProduct = (product) => {
  return { 
    type: Types.UPDATE_PRODUCT, 
    product 
  };
};
