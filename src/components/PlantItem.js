import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light, cart, price, updateCart}){

    /*function handleClick(e) {
        console.log('✨ ceci est mon event :',name);
    };*/


    function addToCart(name, price) {
        console.log('addplant actif');
        var newCart = cart;
        var plant = cart.find(plant => plant.name === name);
        if (plant) {
            newCart.forEach(element => {
                if (element.name === name) {
                    element.number++;
                }
            });
            updateCart([...newCart]);
        } else {
            var number = 1;
            updateCart([...cart, { name, price, number }]);
        }
        console.log(cart);
    }

  
 
    return (

        <li key={id} className='lmj-plant-item'>
            <span className='lmj-plant-item-price'>{price}€</span>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}></img>
            <span>{name}</span>
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
            <button onClick={() => addToCart(name, price)}>Ajouter</button>
        </li>

    )
};



export default PlantItem;