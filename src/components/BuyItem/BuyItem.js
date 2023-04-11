import {useForm} from "../../hooks/useForm";
import {useService} from "../../hooks/useService";
import {itemServiceFactory} from "../../services/itemsService";
import {useContext, useState} from "react";
import {AuthContext} from "../../contexts/AuthContext";
import {useNavigate, useParams} from "react-router-dom";


export const BuyItem = () => {
    const itemService = useService(itemServiceFactory)
    const { itemId } = useParams();
    const {whenDeleted} = useContext(AuthContext)
    const navigate = useNavigate()

    const onBuyClick = (e) => {
        e.preventDefault()

        itemService.delete(itemId);

        whenDeleted(itemId);

        navigate('/catalog');
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" method="delete" onSubmit={onBuyClick}>
                <div className="container">

                    <h1>Address</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter item title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter item category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" placeholder="Write something." ></textarea>
                    <input className="btn submit" type="submit" value="Create Game"/>
                </div>
            </form>
        </section>
    )
}