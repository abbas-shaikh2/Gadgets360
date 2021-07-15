import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  filterProductsReducer,
  productCreateReducer,
  productDeleteReducer,
  productDetailReducer,
  productListReducer,
  productReviewReducer,
  productTopRatedReducer,
  productUpdateReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  __GADGETS360_CARTITEMS,
  __GADGETS360_PAYMENT_METHOD,
  __GADGETS360_SHIPPING_ADDRESS,
  __GADGETS360_USERINFO,
} from "./constants/localStrorageConstant";
import {
  getUserFromIdReducer,
  updateUserFromIdReducer,
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";
import {
  listOrderReducer,
  myOrderReducer,
  orderCreateReducers,
  orderDetailsReducer,
  orderPayReducer,
  updateOrderReducer,
} from "./reducers/orderReducers";

const reducer = combineReducers({
  productList: productListReducer,
  filterProduct: filterProductsReducer,
  productDetail: productDetailReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReview: productReviewReducer,
  productTopRated: productTopRatedReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  getUserFromId: getUserFromIdReducer,
  updateUserFromId: updateUserFromIdReducer,
  userDelete: userDeleteReducer,
  orderCreate: orderCreateReducers,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  myOrder: myOrderReducer,
  listOrder: listOrderReducer,
  updateOrder: updateOrderReducer,
});

const cartItemsFromStorage = localStorage.getItem(__GADGETS360_CARTITEMS)
  ? JSON.parse(localStorage.getItem(__GADGETS360_CARTITEMS))
  : [];

const shippingAddressFromStorage = localStorage.getItem(
  __GADGETS360_SHIPPING_ADDRESS
)
  ? JSON.parse(localStorage.getItem(__GADGETS360_SHIPPING_ADDRESS))
  : {};

const paymentMethodFromStorage = localStorage.getItem(
  __GADGETS360_PAYMENT_METHOD
)
  ? JSON.parse(localStorage.getItem(__GADGETS360_PAYMENT_METHOD))
  : null;

const userInfoFromStorage = localStorage.getItem(__GADGETS360_USERINFO)
  ? JSON.parse(localStorage.getItem(__GADGETS360_USERINFO))
  : null;

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
