import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as itemsService from "../../services/itemsService";
import {useService} from "../../hooks/useService";
import {itemServiceFactory} from "../../services/itemsService";
import {useForm} from "../../hooks/useForm";

export const EditItem = ({onItemEditSubmit}) => {
    const {itemId} = useParams()
    const itemService = useService(itemServiceFactory)
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        category: '',
        price: '',
        imageUrl: '',
        summary: '',
    }, onItemEditSubmit);

    useEffect(() => {
        itemService.getOne(itemId)
            .then(result => {
                changeValues(result);
            });
    }, [itemId]);

    return (
        <section id="edit-page" className="auth">
        <form id="edit" method="post" onSubmit={onSubmit}>
            <div className="container">

                <h1>Edit Game</h1>
                <label htmlFor="leg-title">Name</label>
                <input type="text" id="title" name="title" value={values.title} onChange={changeHandler}/>

                <label htmlFor="category">Category</label>
                <input type="text" id="category" name="category" value={values.category} onChange={changeHandler}/>

                <label htmlFor="levels">Price</label>
                <input type="number" id="price" name="price" min="1" value={values.price} onChange={changeHandler}/>

                <label htmlFor="game-img">Image</label>
                <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler}/>

                <label htmlFor="summary">Summary</label>
                <textarea name="summary" id="summary" value={values.summary} onChange={changeHandler}></textarea>
                <input className="btn submit" type="submit" />

            </div>
        </form>
    </section>

    )
}