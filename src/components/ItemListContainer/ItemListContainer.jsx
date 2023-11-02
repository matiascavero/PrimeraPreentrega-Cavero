import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "../ProductosJson/Productos.json";
import ItemList from "../ItemList/ItemList";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let Data;
        if (id) {
          Data = Products.filter((item) => item.category === id);
        } else {
          Data = Products;
        }

        // Agregar un retraso de 2 segundos antes de establecer los datos
        setTimeout(() => {
          setItem(Data);
        }, 1500);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <div className="greetdiv">
        <h2>{greeting}</h2>
      </div>
      <div>
        <ItemList item={item} />
      </div>
    </div>
  );
};

export default ItemListContainer;
