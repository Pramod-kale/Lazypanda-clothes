import { useState, createContext } from "react";

import Products from "../shop-date.json";

export const ProductsContext = createContext({
    products: [],
})


export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(Products);
    const value = { products, setProducts };

    return <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
}