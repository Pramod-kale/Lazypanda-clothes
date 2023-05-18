import './CartDropdown.scss';
import { useNavigate } from 'react-router-dom';

import Button from "../button/button.component"
import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()

    const navigateToCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {cartItems.map(item => {
                    return (
                        <CartItem key={item.id} cartItem={item} />
                    )
                })}


            </div>
            <Button onClick={navigateToCheckout}> Go To Checkout</Button>
        </div>
    )
}

export default CartDropdown;