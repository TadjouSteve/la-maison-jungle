import Banner from './Banner';
/*import Cart from './Cart';*/
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'


function App() {
  return (
    <div>
      <Banner>
          <h1 className='lmj-title'>La maison jungle</h1>
          <img src={logo} alt='La maison jungle' className='lmj-logo' />
      </Banner>
      {/*<Cart/>*/}
      <ShoppingList/>
      <Footer/>
    </div>
  );
} 

export default App; 
