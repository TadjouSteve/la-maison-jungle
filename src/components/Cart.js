import '../styles/Cart.css'

function Cart(){

    var priceMonstera = 8;
    var priceLierre = 10;
    var priceBouquet = 15;

    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <ul>
                <li>Monstera:{priceMonstera}</li>
                <li>Lierre:{priceLierre}</li>
                <li>Bouquet de fleurs:{priceBouquet}</li>
            </ul>

            <h4>Prix total:{priceBouquet + priceLierre + priceMonstera}</h4>
        </div>
    )

}

export default Cart;