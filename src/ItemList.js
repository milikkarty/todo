import { FaTrashAlt } from 'react-icons/fa';

const ItemList = ({ items, handleDelete, handleCheck }) => {
    return (
        <ul>
            {
                items.map(item => (
                    <li>
                        <input
                            type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked}
                        />
                        <label
                            style={item.checked ? {textDecoration: 'line-through'} : null}
                            onDoubleClick={() => handleCheck(item.id)}
                        >{item.text}</label>
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