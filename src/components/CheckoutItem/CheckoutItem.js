import './CheckoutItem.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const { deleteCartFromItem, addItemToCart, decrementCartItem } = useContext(CartContext)


    const deleteCartItemHandler = () => { deleteCartFromItem(cartItem) }
    const incrementCartItemHandler = () => { addItemToCart(cartItem) }
    const decrementCartItemHandler = () => { decrementCartItem(cartItem) }

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>

                <div className='arrow' onClick={decrementCartItemHandler}> &#10094; </div>

                <div className='value'>{quantity}</div>

                <div className='arrow' onClick={incrementCartItemHandler} >&#10095;</div>

            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={deleteCartItemHandler} > &#10005; </div>


        </div>
    )


}
export default CheckoutItem;