import { CatalogItem } from "./CatalogItem/CatalogItem"

export const Catalog = ({items}) => {

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {items.map(x =>
                <CatalogItem key={x._id} {...x}/>
            )}
            {items.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    )
}