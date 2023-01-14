import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIconComponent = () => {
    const { setIsCartOpen } = useContext(CartContext)

    const toggleIsCartOpen = () => {
        setIsCartOpen(prev => !prev)
    }
    return (
        <div onClick={toggleIsCartOpen} className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIconComponent;