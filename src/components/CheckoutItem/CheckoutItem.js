import './CheckoutItem.scss';


//redux
import {
    addItemToCart,
    deleteItemFromCart,
    decrementCartItem
} from '../../store/cart/cart.action';

import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const deleteCartItemHandler = () => dispatch(deleteItemFromCart(cartItems, cartItem))
    const incrementCartItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
    const decrementCartItemHandler = () => dispatch(decrementCartItem(cartItems, cartItem))

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