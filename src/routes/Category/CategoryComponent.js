import { useParams } from "react-router-dom"
import { useContext, useEffect, useState, Fragment } from "react"

import { CategoriesContext } from "../../contexts/categories.contexts"
import ProductCard from './../../components/ProductCard/ProductCard';


import './CategoryStyles.scss'

const Category = () => {

    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState([])


    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <h2 className="title">{category.toLocaleUpperCase()}</h2>
            <div className="category-container">

                {
                    products && products.map(products => < ProductCard key={products.id} product={products} />)
                }
            </div>
        </Fragment>
    )
}

export default Category