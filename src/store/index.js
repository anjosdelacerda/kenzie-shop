import { legacy_createStore as createStore, combineReducers } from "redux";
import menuReducer from "./menu/reducer";

import bookReducer from "./modules/bookcase/reducer";
import cartReducer from "./modules/cart/reducer";

const reducers = combineReducers({
  books: bookReducer,
  cart: cartReducer,
  menu: menuReducer,
});

const store = createStore(reducers);

export default store;
