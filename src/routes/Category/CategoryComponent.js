import { useParams } from "react-router-dom"
import { useEffect, useState, Fragment } from "react"

import ProductCard from './../../components/ProductCard/ProductCard';


import './CategoryStyles.scss'
import { useSelector, } from 'react-redux';
import { selectCategoriesMap } from './../../store/categories/category.selector';

const Category = () => {

    const { category } = useParams()

    const categoriesMap = useSelector(selectCategoriesMap)

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