
import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../contexts/categories.contexts';


import CategoryPreview from '../../components/CategoryPreview/CategoryPreview.js';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title]
                return (
                    <CategoryPreview title={title} products={products} />
                )

            })}
        </Fragment>
    )
}

export default CategoriesPreview