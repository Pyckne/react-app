import { useEffect, useState } from 'react';
import { ITEMS } from './items.js';
import Item from '../Item';

function ItemList () {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(ITEMS), 2000);
            });
        };

        async function fetchItems() {
            try {
                const items = await getItems();
                setItems(items);
            } catch (error) {
                console.log(error);
            }
        }

        fetchItems();
    }, []);


    return (
        <>
        { items.map(item => <Item key={item.id} {...item} />) }
        {/* <Item tittle="Reloj" price="2000" img="https://picsum.photos/200/300"/> */}
        </>
      );
}

export default ItemList;