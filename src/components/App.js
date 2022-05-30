import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'
import '../styles/Layout.css'
import {useEffect, useState} from 'react'


function App() {
  const savedCart=localStorage.getItem('cart');
  const [cart,updateCart]=useState(savedCart ?JSON.parse(savedCart):[]);
  useEffect(()=>{
      localStorage.setItem('cart',JSON.stringify(cart));
  },[cart])
  return (
    <div>
      <Banner>
          <h1 className='lmj-title'>La maison jungle</h1>
          <img src={logo} alt='La maison jungle' className='lmj-logo' />
      </Banner>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
       
    </div>
  );
} 

export default App; 
