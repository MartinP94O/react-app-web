import { Link } from 'react-router-dom'
import {useState} from "react";

export const CatalogItem = ({_id, title, imageUrl, category, price}) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl}/>
                <h6>{title}</h6>
                <h2>{price} $</h2>
                <Link to={`/catalog/${_id}`} className="details-button">Details</Link>
            </div>

        </div>

    )
}