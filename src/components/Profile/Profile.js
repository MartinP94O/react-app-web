import {useContext} from "react";
import {AuthContext} from "../../contexts/AuthContext";
import {Link} from "react-router-dom";


export const Profile = () => {
    const {userEmail, username, userid} = useContext(AuthContext)

    return (
        <div className="profile">
            <div className="allGames-info">
                <h6>Email: {userEmail}</h6>
                <h6>Name: {username}</h6>
            </div>

        </div>
    )
}


