import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
   return(
    <nav>
        <div className="div1">
         <img src="../public/logo-pagina.jpg" alt="" className="logo"/>
            <h1>Todo software</h1>
            <ul>
                <li>
                    <a href="#">Inicio </a>              
                </li>
                <li>
                   <a href="#">Nosotros</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
                <li>
                    <a href="#">Iniciar sesion</a>
                </li>
            </ul>
            <CartWidget/>
        </div>
    </nav>
   )
}

export default NavBar