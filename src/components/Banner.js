import '../styles/Banner.css'



function Banner({children}){

    return (
        <div className='lmj-titre'>

            {children}
           { /*<h1 className='lmj-title'>{titre}</h1>
            <img src={logo} alt='la-maison-jungle' className='lmj-logo'></img>*/}
        </div>
        
    );
}

export default Banner;