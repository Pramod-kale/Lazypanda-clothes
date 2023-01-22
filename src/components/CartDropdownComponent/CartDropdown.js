import './CartDropdown.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

import Button from "../button/button.component"
import CartItem from '../CartItem/CartItem';

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext)
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