
import SHOP_DATA from '../../shop-date.json';
import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.contexts';

import './ShopPage-styles.scss';

import ProductCard from './../../components/ProductCard/ProductCard';

const Shop = () => {
    const { products } = useContext(ProductsContext)

    return (
        <div className='product-card-page'>
            {
                products.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })
            }
        </div>
    )
}

export default Shop