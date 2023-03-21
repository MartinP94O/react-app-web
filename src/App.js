import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { CreateItem } from "./components/CreateItem/CreateItem";
import { Catalog } from "./components/Catalog/Catalog";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-item" element={<CreateItem />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>

        </main>
      </div>
      <div>
        <Footer />
      </div>

    </>
  );
}

export default App;
