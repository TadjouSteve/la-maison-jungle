import { plantList } from "../datas/plantList.js";
import "../styles/ShoppingList.css"
import PlantItem from "./PlantItem.js";


function ShoppingList(){
    var categoryList=[];
    
   plantList.forEach(function(plant){
        if(categoryList.find(cat => cat === plant.category) === undefined){
           categoryList.push(plant.category); 
        }
    });

    return(
        <div>
            <h3>Categorie de plantes</h3>
            <ul>
                {categoryList.map((category) => (
                    <li key={category} >{category}</li>
                ))}
            </ul>
            <br></br>
            <h3>Nom des plantes</h3>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
                    <PlantItem
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;