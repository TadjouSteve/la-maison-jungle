import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({id,cover,name,water,light}){

    function handleClick(e) {
        console.log('✨ ceci est mon event :',name)
    };

    return (

        <li key={id} className='lmj-plant-item' onClick={handleClick}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}></img>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>

    )
};



export default PlantItem;