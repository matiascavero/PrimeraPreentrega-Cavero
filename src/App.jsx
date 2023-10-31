import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Categorias/Error'


function App() {
  return (
    <div>

    <BrowserRouter>
    <NavBar/>

    <Routes>
    <Route path='/' element={<ItemListContainer greeting='Bienvenidos a todo software'/>}/>
    <Route path='/category/:id' element={<ItemListContainer/>}/>
    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    <Route path='*' element={<Error/>}/>
    </Routes>

    </BrowserRouter>

    </div>
  )
}

export default App