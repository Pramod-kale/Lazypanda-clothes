import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.page';
import CheckoutPage from './components/Checkout-page/CheckoutPage';
import { setCurrentUser } from './store/user/user.reducer';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      const pickedUser = user && (({ accessToken, email }) => ({ accessToken, email }))
        (user)

      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  },);


  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
