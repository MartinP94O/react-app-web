import {useContext, useEffect, useState} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import { itemServiceFactory } from '../../services/itemsService';
import {AuthContext} from "../../contexts/AuthContext";
import {useService} from "../../hooks/useService";


export const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const {userId, whenDeleted} = useContext(AuthContext)
    const itemService = useService(itemServiceFactory)
    const navigate = useNavigate()


    useEffect(() => {
        itemService.getOne(itemId)
            .then(result => {
                setItem(result);
            })
    }, [itemId]);

    const isOwner = item._ownerId === userId

    const onDeleteClick = async () => {
        const result = window.confirm(`Are you sure you want to delete ${item.title}`);

        if (result) {
            await itemService.delete(item._id);

            whenDeleted(item._id);

            navigate('/catalog');
        }
    }

    return (
        <section id="game-details">
            <h1>Item Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={item.imageUrl} />
                    <h1>{item.title}</h1>
                    <span className="levels">MaxLevel: {item.maxLevel}</span>
                    <p className="type">{item.category}</p>
                </div>

                <p className="text">{item.summary}</p>

                {isOwner && (
                    <div className="buttons">
                        <Link to={`/catalog/${item._id}/edit`} className="button">
                            Edit
                        </Link>
                        <button className="button" onClick={onDeleteClick}>
                            Delete
                        </button>
                    </div>)}

            </div>


        </section>
    );
};


// export const ItemDetails = () => {
//     const { itemId } = useParams();
//     const [items, setItems] = useState([]);
//     const {userId} = useContext(AuthContext)
//     const itemService = useService(itemServiceFactory)
//     const navigate = useNavigate()
//
//
//
//     useEffect(() => {
//         itemService.getAll()
//             .then(result => {
//                 setItems(result);
//             })
//     }, []);
//
//     const item = items.filter((i) => i._id === itemId)[0]
//
//     const isOwner = item._ownerId === userId
//     console.log(item)
//     console.log(item._ownerId)
//     console.log(userId)
//     console.log(`|${item._ownerId}|=|${userId}`)
//
//     const onDeleteClick = async () => {
//         await itemService.delete(item._id)
//         // setItems(itemService.getAll())
//
//
//         navigate('/catalog')
//     }
//
//     return (
//         <section id="game-details">
//             <h1>Item Details</h1>
//             <div className="info-section">
//                 <div className="game-header">
//                     <img className="game-img" src={item.imageUrl} />
//                     <h1>{item.title}</h1>
//                     <span className="levels">MaxLevel: {item.maxLevel}</span>
//                     <p className="type">{item.category}</p>
//                 </div>
//
//                 <p className="text">{item.summary}</p>
//
//                 {isOwner && (
//                     <div className="buttons">
//                         <Link to={`/catalog/${item._id}/edit`} className="button">
//                             Edit
//                         </Link>
//                         <button className="button" onClick={onDeleteClick}>
//                             Delete
//                         </button>
//                     </div>
//                 )}
//
//             </div>
//
//
//         </section>
//     );
// };