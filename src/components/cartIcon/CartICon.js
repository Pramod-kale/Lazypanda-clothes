import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

//redux
import { setIsCartOpen } from '../../store/cart/cart.action';
import { useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { useDispatch } from 'react-redux';

const CartIconComponent = () => {
    const dispatch = useDispatch()
    const cartCount = useSelector(selectCartCount)
    const isCartOpen = useSelector(selectIsCartOpen)


    return (
        <div onClick={() => dispatch(setIsCartOpen(!isCartOpen))} className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIconComponent;