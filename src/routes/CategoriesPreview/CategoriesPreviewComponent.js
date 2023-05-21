
import { Fragment } from 'react';



import CategoryPreview from '../../components/CategoryPreview/CategoryPreview.js';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from './../../store/categories/category.selector';
import Spinner from './../../components/spinner/Spinner';

const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    return (
        <Fragment>
            {

                isLoading ?
                    <Spinner />
                    :
                    (Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title]
                        return (
                            <CategoryPreview key={title} title={title} products={products} />
                        )

                    }))
            }
        </Fragment>
    )
}

export default CategoriesPreview