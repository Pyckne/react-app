import { useEffect, useState } from 'react';
import { ITEMS } from './items.js';
import Item from '../Item';
import {getFirestore} from '../../firebase/index';

function ItemList () {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getItems = () => {
            const ddbb = getFirestore();
            const items = ddbb.collection('items');
            const getData = () => {
                items.get()
                    .then(snapshot => {
                        const data = snapshot.docs.map(doc => {
                            return {
                                id: doc.id,
                                ...doc.data()
                            }
                        });
                        setItems(data);
                        setLoading(false);
                    })
                    .catch(err => {
                        setError(true);
                        setLoading(false);
                    });
            }
            getData();
/*             return new Promise((resolve, reject) => {
                setTimeout(() => resolve(ITEMS), 2000);
            });
        };

        async function fetchItems() {
            try {
                const items = await getItems();
                setItems(items);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(true);
                setLoading(false);
            }
        }

        fetchItems();

        return () => {
            setItems([]);
            setLoading(true);
            setError(false); */
        };
    }, []);

    return (
        <>
            { loading ? <h1>Loading...</h1> : null }
            { error ? <h1>Error</h1> : null }
            { items.map(item => <Item key={item.id} {...item} />) }
        </>
    );
}

export default ItemList;