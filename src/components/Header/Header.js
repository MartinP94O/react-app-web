import { Link } from 'react-router-dom'
import { useContext } from "react";

import {AuthContext} from "../../contexts/AuthContext";

export const Header = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <header>

        <h1><Link className="home" to="/">POST BOARD </Link></h1>
        <nav>
            <Link to="/catalog">CATALOG</Link>

            {isAuthenticated && (
                <div id="user">
                    <Link to="create-item">CREATE ITEM</Link>
                    <Link to="/profile">PROFILE</Link>
                    <Link to="/logout">LOGOUT</Link>
                </div>
            )}
            <Link to="/about">ABOUT</Link>

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