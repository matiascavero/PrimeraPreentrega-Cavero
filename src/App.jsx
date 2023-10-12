import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/Navbar'
function App() {
  return (
    <div>

      <NavBar/>
       <ItemListContainer greeting='Bienvenido a la venta online de Todo software'/>

    </div>
  )
}

export default App
