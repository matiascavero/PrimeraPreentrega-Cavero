import { useState } from "react"
import "./chekin.css"
import useCartContext from "../../hook/useCartContext";
import Swal from "sweetalert2";
import { createOrder } from '../../services/firebaseServices';

const Chekin = () =>{
  const [user, setUser] = useState({});
  const [orderNumber, setOrderNumber] = useState(null);
  const { cart } = useCartContext()

  const handleInput = ({target}) =>{
    setUser(currentValue =>{
      currentValue[target.name] = target.value
      return currentValue
    })
    console.log(user)
  }

  const handleSubmit = async (event) =>{
    event.preventDefault()
    console.log(user)
    const buy = (cart, user)
    const order = await createOrder(buy);
    setOrderNumber(order);
    Swal.fire({
      title:`¡Compra realizada con exito!, numero de orden: ${order}` ,
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
      `
    });
  }
return(
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label> EMAIL: </label>
        <br />
        <input type="email" name="email" placeholder="pepito10@gmail.com" value={user.email} onChange={handleInput} />
        <br />
        <label>NOMBRE Y APELLIDO:</label>
        <br /> 
        <input type="text" name="username" placeholder="Pepito Fernandez" value={user.username} onChange={handleInput} />
        <br />
        <label>TELEFONO:</label>
        <br />
        <input type="number" name="tel" placeholder="11 2401-9274" value={user.tel} onChange={handleInput} />
        <br />
        <button type="submit" className="buttonConfirm" onSubmit={handleSubmit}>Confirmar compra</button>
      </form>
      {/* Mostrar el número de orden si está disponible */}
      {orderNumber && (
        <div className="orderNumber">
          <p>Número de orden: {orderNumber}</p>
        </div>
      )}
     
    </div>
   
)
}


export default Chekin