import { FaTrashAlt } from 'react-icons/fa';

const ItemList = ({items, handleDelete}) => {
    return (
        <ul>
            {
                items.map(item => (
                    <li>
                        <input type="checkbox" />
                        <label>{item.text}</label>
                        <FaTrashAlt
                            aria-label={`Delete ${item.text}.`}
                            role="button"
                            tabindex="0"
                            onClick={() => handleDelete(item.id)}
                        />
                    </li>
                ))
            }
        </ul>
    )
}

export default ItemList;