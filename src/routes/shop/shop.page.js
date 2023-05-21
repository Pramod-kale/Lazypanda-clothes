
import { Routes, Route } from 'react-router-dom'

import CategoriesPreview from '../CategoriesPreview/CategoriesPreviewComponent';
import Category from '../Category/CategoryComponent';


import './ShopPage-styles.scss';
import { useEffect } from 'react';
import { setCategories } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'



const Shop = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments()
            dispatch(setCategories(categoriesArray))
        }

        getCategoriesMap()


    },)


    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop