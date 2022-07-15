import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';

const Content = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            text: "Laundry"
        },
        {
            id: 2,
            checked: false,
            text: "Lawn"
        },
        {
            id: 3,
            checked: false,
            text: "Code"
        }
    ]);

    return (
        <main>
            {
                items.map(item =>
                    <li>
                        <input type="checkbox" />
                        <label>{item.text}</label>
                        <FaTrashAlt
                            role="button"
                            tabindex="0"
                        />
                    </li>
                )
            }
        </main>
    )
}

export default Content;