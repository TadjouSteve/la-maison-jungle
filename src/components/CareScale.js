import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
}

function CareScale({scaleValue,careType}){
    const range = [1,2,3];
    const scaleType= careType === 'light' ? (
        <img src={Sun} alt='sun-icon'></img>
    ) : (<img src={Water} alt='Water-icon'></img> );

    function handleClick(e){
        e.stopPropagation();
        alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${careType ==='light' ?'De lumiere':"dárrosage"}`);

    }

    return (

        <div onClick={handleClick}>
            {range.map((rangeItem)=>scaleValue >= rangeItem ?
                        (<span key={rangeItem}>{scaleType}</span>) : null 
                                                                   
            )}
        </div>

    );
}

export default CareScale;