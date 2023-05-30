import './CheckoutItem.scss';


//redux
import { useDispatch, } from 'react-redux';

import {
    addItemToCart,
    decrementCartItem,
    deleteItemFromCart
} from '../../store/cart/cart.reducer';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const dispatch = useDispatch()

    const deleteCartItemHandler = () => dispatch(deleteItemFromCart(cartItem))
    const incrementCartItemHandler = () => dispatch(addItemToCart(cartItem))
    const decrementCartItemHandler = () => dispatch(decrementCartItem(cartItem))

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