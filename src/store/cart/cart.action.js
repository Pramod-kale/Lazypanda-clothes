import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";


export const setIsCartOpen = boolean =>
    createAction(CART_ACTION_TYPES.TOGGLE_CART, boolean);


const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, productToRemove) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);

    if (existingCartItem?.quantity === 1) {
        return cartItems.filter((cartItems) => cartItems?.id !== productToRemove?.id)
    }

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
    }

}

export const deleteCartItem = (cartItems, productToDelete) => {
    return cartItems.filter((cartItems) => cartItems?.id !== productToDelete?.id)
}





export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartItems)
}

export const decrementCartItem = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartItems)
}

export const deleteItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = deleteCartItem(cartItems, productToRemove)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartItems)
}