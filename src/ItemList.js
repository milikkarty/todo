import { FaTrashAlt } from 'react-icons/fa';

const ItemList = ({items}) => {
    return (
        <ul>
            {
                items.map(item => (
                    <li>
                        <input type="checkbox" />
                        <label>{item.text}</label>
                        <FaTrashAlt
                            role="button"
                            tabindex="0"
                        />
                    </li>
                ))
            }
        </ul>
    )
}

export default ItemList;