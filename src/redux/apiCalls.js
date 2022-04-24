import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "./productRedux";
import {
  getUserStart,
  getUserSuccess,
  getUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  addUserStart,
  addUserSuccess,
  addUserFailure,
} from './userRedux';
import { publicReq, userReq } from "../reqMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicReq.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (e) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicReq.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (e) {
    dispatch(getProductFailure());
  }
};

export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userReq.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(res.data));
  } catch (e) {
    dispatch(deleteProductFailure());
  }
};


export const updateProducts = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    dispatch(updateProductSuccess({id, product}));
  } catch (e) {
    dispatch(updateProductFailure());
  }
};

export const addProducts = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userReq.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (e) {
    dispatch(addProductFailure());
  }
};

export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await userReq.get("/users");
    dispatch(getUserSuccess(res.data));
  } catch (e) {
    dispatch(getUserFailure());
  }
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await userReq.put(`/users/${id}`, user);
    dispatch(updateUserSuccess(res.data));
  } catch (e) {
    dispatch(updateUserFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    const res = await userReq.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(res.data));
  } catch (e) {
    dispatch(deleteUserFailure());
  }
};

export const addUser = async (user, dispatch) => {
  dispatch(addUserStart());
  try {
    const res = await publicReq.post(`/auth/register`, user);
    dispatch(addUserSuccess(res.data));
  } catch (e) {
    dispatch(addUserFailure());
  }
};
