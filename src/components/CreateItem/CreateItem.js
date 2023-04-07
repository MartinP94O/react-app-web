import {useForm} from "../../hooks/useForm";

export const CreateItem = ({onCreateItemSubmit}) => {

    const {values, changeHandler, onSubmit} = useForm({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    },onCreateItemSubmit)


    return (
        <section id="create-page" className="auth">
            <form id="create" method="post" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Create item</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter item title..." value={values.title} onChange={changeHandler}/>

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter item category..." value={values.category} onChange={changeHandler}/>

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" value={values.maxLevel} onChange={changeHandler}/>

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." value={values.imageUrl} onChange={changeHandler}/>

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" placeholder="Write something." value={values.summary} onChange={changeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Create Game"/>
                </div>
            </form>
        </section>
    )
}