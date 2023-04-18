import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { CreateItem } from "./components/CreateItem/CreateItem";
import { Catalog } from "./components/Catalog/Catalog";
import { Footer } from "./components/Footer/Footer";
import { ItemDetails } from "./components/ItemDetails/ItemDetails";
import { EditItem } from "./components/EditItem/EditItem";

import {AuthContext} from "./contexts/AuthContext";

import { itemServiceFactory } from "./services/itemsService";
import {Logout} from "./components/Logout/Logout";
import {Profile} from "./components/Profile/Profile";
import {authServiceFactory} from "./services/authService";
import {About} from "./components/About/About";
import {BuyItem} from "./components/BuyItem/BuyItem";
import {EditProfile} from "./components/EditProfile/EditProfile";

function App() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [auth, setAuth] = useState({});
  const itemService = itemServiceFactory(auth.accessToken); //auth.accessToken
  const authService = authServiceFactory(auth.accessToken);

  useEffect(() => {
      itemService.getAll().then((result) => {
      setItems(result);
    });
  }, []);

  const onRegisterSubmit = async (values) => {
    const { confirmPassword, ...registerData } = values;
    if (confirmPassword !== registerData.password) {
      return;
    }
    try {
      const result = await authService.register(registerData);

      setAuth(result);

      navigate("/catalog");
    } catch (error) {
      console.log("There is a problem");
    }
  };

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);

      setAuth(result);

      navigate('/catalog');
    } catch (error) {
      console.log('Problem..')
    }
  };

  const onLogout = async () => {
    await authService.logout();

    setAuth({});
  };

  const onProfileEdit = async (data) => {
    const result = await authService.edit(data);

    setAuth((state) => [...state, result]);
  }

  const onCreateItemSubmit = async (data) => {
    const newGame = await itemService.create(data);

    setItems((state) => [...state, newGame]);
    navigate("/catalog");
  };

  const onItemEditSubmit = async (values) => {
    const result = await itemService.edit(values._id, values);

    setItems((state) => state.map((x) => (x._id === values._id ? result : x)));

    navigate(`/catalog/${values._id}`);
  };

  const whenDeleted = (itemId) => {
    setItems(state => state.filter(item => item._id !== itemId));
  }

  const contextValues = {
    whenDeleted,
    onRegisterSubmit,
    onLoginSubmit,
    onLogout,
    // onProfileEdit,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
    username: auth.username,
  };



  return (
    <AuthContext.Provider value={contextValues}>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/profile' element={<Profile />} />
            {/*<Route path='/profile/:userId' element={<EditProfile onProfileEdit={onProfileEdit}/>} />*/}
            <Route
              path="/create-item"
              element={<CreateItem onCreateItemSubmit={onCreateItemSubmit} />}
            />
            <Route path="/catalog" element={<Catalog items={items} />} />
            <Route path="/catalog/:itemId" element={<ItemDetails />} />
            <Route
              path="/catalog/:itemId/edit"
              element={<EditItem onItemEditSubmit={onItemEditSubmit} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/buy/:itemId" element={<BuyItem />} />
          </Routes>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </AuthContext.Provider>
  );
}

export default App;
