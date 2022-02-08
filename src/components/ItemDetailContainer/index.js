import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/index.js';
import {getFirestore} from '../../firebase/index.js';

function ItemDetailContainer (i) {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
            const ddbb = getFirestore();
            const itemsCollection = ddbb.collection('items');
            const getData = async () => {
                try {
                    const data = await itemsCollection.doc(i.index).get();
                    const item = {
                        id: data.id,
                        ...data.data()
                    }
                    setItem(item);
                    setLoading(false);
                } catch (error) {
                    setError(true);
                }
            }
            getData();

        return () => {
            setItem(null);
            setLoading(true);
            setError(false);
        };
    }, [i.index]);


    return (
        <>
            { loading ? <h1>Loading...</h1> : null }
            { error ? <h1>Error</h1> : null }
            { item ? <ItemDetail item={item} /> : null }
        </>
      );
}

export default ItemDetailContainer;