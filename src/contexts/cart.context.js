import { createContext, useState, useEffect } from "react";



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

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const decrementCartItem = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }
    const deleteCartFromItem = (productToRemove) => {
        setCartItems(deleteCartItem(cartItems, productToRemove))
    }

    useEffect(() => {

        const newCartCount = cartItems.reduce(
            (total, current) => total + current.quantity,
            0
        )
        setCartCount(newCartCount);
    }, [cartItems])


    useEffect(() => {
        const newTotalPrice = cartItems.reduce(
            (total, current) => total + current.price * current.quantity,
            0
        );
        setTotalPrice(newTotalPrice)
    }, [cartItems])





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