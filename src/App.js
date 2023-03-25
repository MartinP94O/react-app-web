import { Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { CreateItem } from "./components/CreateItem/CreateItem";
import { Catalog } from "./components/Catalog/Catalog";
import { Footer } from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import * as itemService from "./services/itemsService"

function App() {
    const navigate = useNavigate()
    const [items, setItems] = useState([]);

    useEffect(() => {
        itemService.getAll().then(result => {
            setItems(result)
        })
    }, [])

    const onCreateItemSubmit = async (data) => {

        const newGame = await itemService.create(data)

        //TODO add to state
        setItems(state => [...state, newGame])
        //TODO redirect to catalog
        navigate('/catalog')
    }
  return (
    <>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-item" element={<CreateItem onCreateItemSubmit={onCreateItemSubmit}/>} />
            <Route path="/catalog" element={<Catalog items={items}/>} />
          </Routes>

        </main>
      </div>
        <footer>
            <Footer />
        </footer>



    </>
  );
}

export default App
