import { useEffect, useState } from 'react';
import Item from '../Item';
import {getFirestore} from '../../firebase/index.js';

function ItemList () {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
            const ddbb = getFirestore();
            const itemsCollection = ddbb.collection('items');
            const getData = async () => {
                try {
                    const data = await itemsCollection.get();
                    const items = data.docs.map(doc => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    });
                    setItems(items);
                    setLoading(false);
                } catch (error) {
                    setError(true);
                }
            }
            getData();

        return () => {
            setItems([]);
            setLoading(true);
            setError(false);
        };
        
    }, []);
    return (
        <>
            {loading && <div>Cargando...</div>}
            {error && <div>Error al cargar los datos</div>}
            {items.map(item => <Item key={item.id} item={item} />)}
        </>  );
}

export default ItemList;