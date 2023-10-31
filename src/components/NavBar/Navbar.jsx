import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"


const NavBar = () => {
   return(
    <div>
    <nav>
        <div className="div1">
        <Link to={'/'} className="linkContainer">
        <img src="/logo-pagina.jpg" alt="" className="logo"/>
            <h1 className="titleLogo">Todo software</h1>
        </Link>

            <ul>
                <li>
                    <Link to={'/'}>Inicio</Link>            
                </li>

                <li>
                   <Link to={'/category/PlacDVideo'}>
                    {/* hice esto para que en el navbar se vea todo en la misma linea,
                    porque sino aparecia 'Placa' y abajo 'de video' */}
                    <div className="LinkText">
                        <span>Placas</span>
                        <span>de</span>
                        <span>video</span>
                    </div>
                   </Link>
                </li>

                <li>
                <Link to={'/category/Monitor'}>Monitores</Link>
                </li>

                <li>
                    <Link to={'/category/Ram'}>Rams</Link>
                </li>
            </ul>
            
            <Link to='/'>
                <CartWidget/>
            </Link>
            
        </div>
    </nav>
    </div>
   )
}

export default NavBar