import { useState } from "react";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const ItemCount = ({ stock }) => {
  const [cantidad, setCantidad] = useState(0);

  const incrementar = () => {
    if (stock > cantidad) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuir = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  const restablecer = () => {
    setCantidad(0);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `productos agregados ${cantidad}`,
      showConfirmButton: false,
      timer: 1500,
    });
    console.log(`Se agregaron ${cantidad} de productos al carrito`);
  };

  return (
    <div>
      <div className="count">
        <button onClick={disminuir} className="botonMat">-</button>
        <h2>{cantidad}</h2>
        <button onClick={incrementar} className="botonMat">+</button>
      </div>
      <div>
        <button onClick={restablecer} className="botonAdd">Agregar al carrito</button>
      </div>
    </div>
  );
};

//estamos definiendo que 'stock' es una propiedad requerida y debe ser de tipo número.
ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
};

export default ItemCount;
