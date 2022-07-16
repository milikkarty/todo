import ItemList from './ItemList';

const Content = ({ items, handleDelete, handleCheck }) => {

    return (
        <main>
            {
                items.length ? (
                    <ItemList items={items} handleDelete={handleDelete} handleCheck={handleCheck} />
                ) : (
                    <p>The list is empty.</p>
                )
            }
        </main>
    )
}

export default Content;