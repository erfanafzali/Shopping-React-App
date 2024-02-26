/* eslint-disable no-case-declarations */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helpers/helper";

const CartContext = createContext();

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };

    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };

    case "INCREASE":
      const increasedItems = [...state.selectedItems];
      const incraseIndex = increasedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      increasedItems[incraseIndex] = {
        ...increasedItems[incraseIndex],
        quantity: increasedItems[incraseIndex].quantity + 1,
      };

      return {
        ...state,
        selectedItems: increasedItems,
        ...sumProducts(increasedItems),
      };

    case "DECREASE":
      const decreasedItems = [...state.selectedItems];
      const decreaseIndex = decreasedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (decreasedItems[decreaseIndex].quantity > 1) {
        decreasedItems[decreaseIndex] = {
          ...decreasedItems[decreaseIndex],
          quantity: decreasedItems[decreaseIndex].quantity - 1,
        };
      }

      return {
        ...state,
        selectedItems: decreasedItems,
        ...sumProducts(decreasedItems),
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };

    default:
      throw new Error("Inavlid Action");
  }
};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCarts = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
