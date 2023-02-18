
import { Routes, Route } from 'react-router-dom'

import CategoriesPreview from '../CategoriesPreview/CategoriesPreviewComponent';
import Category from '../Category/CategoryComponent';


import './ShopPage-styles.scss';



const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop