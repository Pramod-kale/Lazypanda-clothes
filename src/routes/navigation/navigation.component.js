import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';


import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';
import CartIconComponent from './../../components/cartIcon/CartICon';
import CartDropdown from '../../components/CartDropdownComponent/CartDropdown';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  const userName = useSelector(state => state?.user?.currentUser?.displayName)
  const dispatch = useDispatch()

  const signOutHandler = () => {
    dispatch(signOutStart())
  }


  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          < CartIconComponent />
          {userName && '|' + userName}
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
