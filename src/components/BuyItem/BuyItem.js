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
    const {values, changeHandler} = useForm({
        city: '',
        street: '',
        building: '',
        phone: '',
    })


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
                    <label htmlFor="leg-title">City</label>
                    <input type="text" id="title" name="city" placeholder="City name" value={values.city} onChange={changeHandler}/>

                    <label htmlFor="category">Street</label>
                    <input type="text" id="category" name="street" placeholder="Enter item category..." value={values.street} onChange={changeHandler}/>

                    <label htmlFor="game-img">Building</label>
                    <input type="text" id="imageUrl" name="building" placeholder="Enter building number" value={values.building} onChange={changeHandler}/>

                    <label htmlFor="levels">Phone number</label>
                    <input type="number" id="maxLevel" name="phone" min="1" placeholder="Enter phone number" value={values.phone} onChange={changeHandler}/>

                    <input className="btn submit" type="submit" value="Buy" disabled={
                        !values.city || !values.street || !values.building || !values.phone
                    }/>
                </div>
            </form>
        </section>
    )
}