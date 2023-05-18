import './CheckoutPage.scss';
import CheckoutItem from '../CheckoutItem/CheckoutItem';

//redux
import { selectCartTotal, selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {

    const cartItems = useSelector(selectCartItems)
    const totalPrice = useSelector(selectCartTotal)


    return (
        <div className='checkout-container'>

            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((cartItem) =>
                <CheckoutItem key={cartItem?.id} cartItem={cartItem} />
            )}

            <span className='total'>Total: ₹{totalPrice}</span>
        </div>
    )
}

export default CheckoutPage;