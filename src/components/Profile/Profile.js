import {useContext} from "react";
import {AuthContext} from "../../contexts/AuthContext";
import {Link} from "react-router-dom";


export const Profile = () => {
    const {userId, token, userEmail, isAuthenticated} = useContext(AuthContext)

    return (
        <div className="allGames">
            <div className="allGames-info">
                <h6>{userEmail}</h6>
                <Link to={`/catalog/${userId}`} className="details-button">Details</Link>
            </div>

        </div>
    )
}


