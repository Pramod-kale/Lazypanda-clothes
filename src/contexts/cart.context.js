import { createContext, useState, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";



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

const deleteCartItem = (cartItems, productToDelete) => {
    return cartItems.filter((cartItems) => cartItems?.id !== productToDelete?.id)
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    decrementCartItem: () => { },
    deleteCartFromItem: () => { },
    cartCount: 0,
    totalPrice: 0,
})


const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    totalPrice: 0,
}

const ACTION_TYPES = {
    SET_CART_ITEM: 'SET_CART_ITEM',
    TOGGLE_CART: 'TOGGLE_CART'
}


const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTION_TYPES.SET_CART_ITEM:
            return {
                ...state,
                ...payload
            }
        case ACTION_TYPES.TOGGLE_CART:
            return {
                ...state,
                ...payload
            }

        default: throw new Error(`Unhandled type of ${type} in  Cart Reducer`)
    }
}


export const CartProvider = ({ children }) => {

    const [{ isCartOpen, cartItems, cartCount, totalPrice }, dispatch] =
        useReducer(cartReducer, INITIAL_STATE)

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)
    }
    const decrementCartItem = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove)
        updateCartItemsReducer(newCartItems)
    }
    const deleteCartFromItem = (productToRemove) => {
        const newCartItems = deleteCartItem(cartItems, productToRemove)
        updateCartItemsReducer(newCartItems)
    }

    const updateCartItemsReducer = (newCartItem) => {
        const newCartCount = newCartItem.reduce(
            (total, current) => total + current.quantity,
            0
        )

        const newTotalPrice = newCartItem.reduce(
            (total, current) => total + current.price * current.quantity,
            0
        );

        dispatch(
            createAction(ACTION_TYPES.SET_CART_ITEM, {
                cartItems: newCartItem,
                cartCount: newCartCount,
                totalPrice: newTotalPrice
            })
        )
    }
    const setIsCartOpen = () => {
        dispatch(createAction(ACTION_TYPES.TOGGLE_CART, { isCartOpen: !isCartOpen }))
    }


    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        decrementCartItem,
        deleteCartFromItem,
        totalPrice,
    }


    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}