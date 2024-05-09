import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CheckoutCard from './components/CheckoutCard';
import CheckoutPage from './components/CheckoutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import { useEffect } from 'react';
import { auth } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './stateProvider';
import Checkout from './components/CheckoutForm/Checkout';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  }, [])



  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/checkout-page' element={<CheckoutPage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/' element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;