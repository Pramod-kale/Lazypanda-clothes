import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import { checkUserSession } from './store/user/user.action';
import Spinner from './components/spinner/Spinner';

const Home = lazy(() => import('./routes/home/home.component'))
const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const Authentication = lazy(() => import('./routes/authentication/authentication.component'));
const Shop = lazy(() => import('./routes/shop/shop.page'));
const CheckoutPage = lazy(() => import('./components/Checkout-page/CheckoutPage'));

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())

  },);


  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='checkout' element={<CheckoutPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
