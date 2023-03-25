import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>

        <h1><Link className="home" to="/">GamesPlay</Link></h1>
        <nav>
            <Link to="/catalog">CATALOG</Link>

            <div id="user">
                <Link to="create-item">CREATE GAME</Link>
                <Link to="">LOGOUT</Link>
            </div>

            <div id="guest">
                <Link to="/login">LOGIN</Link>
                <Link to="/register">REGISTER</Link>
            </div>
        </nav>
    </header>
    )
}