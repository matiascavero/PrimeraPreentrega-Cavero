import PropTypes from "prop-types";
import ItemCount from "../ItemCount/ItemCount.Jsx";
import "../ItemCount/ItemCount.css";
import "./ItemDetail.css";
const ItemDetail = ({ item }) => {
  const stockAsNumber = parseInt(item.stock, 10);
  return (
    <div className="all">
      <div>
        <img src={item.img} alt={item.title} className="imgDetail" />
      </div>
      <div>
        <h3>{item.title}</h3>
        <ul className="list">
          <li>{item.description}</li>
          <li>${item.price}</li>
          <li>Cantidad en stock: {item.stock}</li>
          <ItemCount stock={stockAsNumber} />
        </ul>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object.isRequired, // Define el tipo de datos y si es requerido
};

export default ItemDetail;
