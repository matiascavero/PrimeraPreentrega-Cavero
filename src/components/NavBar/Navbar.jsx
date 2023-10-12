import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
   return(
    <nav>
        <div className="div1">
         <img src="../public/logo-pagina.jpg" alt="" className="logo"/>
            <h1>Todo software</h1>
            <ul>
                <li>
                    Inicio                
                </li>
                <li>
                    Nosotros
                </li>
                <li>
                    Productos
                </li>
                <li>
                    Contacto
                </li>
                <li>
                    Iniciar sesion
                </li>
            </ul>
            <CartWidget/>
        </div>
    </nav>
   )
}

export default NavBar