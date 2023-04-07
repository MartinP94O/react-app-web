import { Link } from 'react-router-dom'
import { useContext } from "react";

import {AuthContext} from "../../contexts/AuthContext";

export const Header = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <header>

        <h1><Link className="home" to="/">Change The Name</Link></h1>
        <nav>
            <Link to="/catalog">CATALOG</Link>

            {isAuthenticated && (
                <div id="user">
                    <Link to="create-item">CREATE ITEM</Link>
                    <Link to="/profile">PROFILE</Link>
                    <Link to="/logout">LOGOUT</Link>
                </div>
            )}

            {!isAuthenticated && (
                <div id="guest">
                    <Link to="/login">LOGIN</Link>
                    <Link to="/register">REGISTER</Link>
                </div>
            )}
        </nav>
    </header>
    )
}