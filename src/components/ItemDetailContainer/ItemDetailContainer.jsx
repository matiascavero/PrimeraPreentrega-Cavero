import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "../ProductosJson/Productos.json";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Data = Products.find((item) => item.id === parseInt(id));
        setTimeout(() => {
          setItem(Data);
        }, 500);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {/* Renderiza el componente ItemDetail solo si 'item' contiene datos válidos, de lo contrario, no se renderiza nada. */}
      {item ? <ItemDetail item={item} /> : null}
    </div>
  );
};

export default ItemDetailContainer;
