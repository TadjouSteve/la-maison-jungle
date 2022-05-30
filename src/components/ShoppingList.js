import { plantList } from "../datas/plantList.js";
import "../styles/ShoppingList.css"
import PlantItem from "./PlantItem.js";
import {useState} from 'react';


function ShoppingList({ cart, updateCart}){
    var categoryList=[];
    var categoryChoose='All'
    const [plantListDisplay, updatePlantListDisplay] = useState(plantList);
    
   plantList.forEach(function(plant){
        if(categoryList.find(cat => cat === plant.category) === undefined){
           categoryList.push(plant.category); 
        }
    });


        function categoryView(e) {
            console.log('ceci est mon evennement',e.target.value);
            categoryChoose = e.target.value;

            if (categoryChoose==='All') {
                updatePlantListDisplay(plantList);
            } else {
                updatePlantListDisplay(plantList.filter((plant)=>plant.category===categoryChoose))
                console.log(plantListDisplay);
            }
        }




    return(
        <div className='lmj-shopping-list'>
            <div className='lmj-categories'>
                <h3>Categorie de plantes</h3>
                <select className='lmj-categories-select' onChange={categoryView}>
                    <option defaultValue value='All'>Toute les categories</option>
                    {categoryList.map((category) => (
                        <option key={category} >{category}</option>
                    ))}
                </select>
            </div>
            <br/>
            <ul className='lmj-plant-list'>
                {plantListDisplay.map(({ id, cover, name, water, light,price }) => (
                    <div key={id}>
                        <PlantItem
                            id={id}
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                            cart={cart}
                            price={price}
                            updateCart={updateCart}
                        />
                    </div>
                    
                ))}
               
            </ul>
        </div>
    )
}

export default ShoppingList;