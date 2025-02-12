import { useState, useCallback, useEffect } from 'react';
import ItemList from '../components/ItemList';

export default function Home() {
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState('');

    const addItem = useCallback(() => {
        setItems(prevItems => [...prevItems, `Item ${prevItems.length + 1}`]);
        setMessage('Item added successfully!');
    }, []);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ItemList items={items} />
            {message && <p id='message'>{message}</p>}
        </div>
    );
}
