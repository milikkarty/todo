import ItemList from './ItemList';

const Content = ({ items }) => {

    return (
        <main>
            {
                items.length ? (
                    <ItemList items={items} />
                ) : (
                    <p>The list is empty.</p>
                )
            }
        </main>
    )
}

export default Content;