import { useEffect, useState } from 'react';
import Item from '../Item';
import {getFirestore} from '../../firebase/index.js';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

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
            {loading && <div className="ItemList-loading"><h1>Cargando...</h1><Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box></div>}
            {error && <h1>Error al cargar los datos</h1>}
            {items.map(item => <Item key={item.id} item={item} />)}
        </>  );
}

export default ItemList;