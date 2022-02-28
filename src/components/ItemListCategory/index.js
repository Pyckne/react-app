import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Item from '../Item/index.js';
import {getFirestore} from '../../firebase/index.js';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ItemListCategory = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const ddbb = getFirestore();
        const itemsCollection = ddbb.collection('items');
        const getData = async () => {
            try {
                const data = await itemsCollection.where('categoryId', '==', id).get();
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
    }, [id]);

    return (
        <div className="ItemListContainer-container">
            { loading ? <div className="ItemListCategory-loading"><h1>Cargando...</h1><Box><CircularProgress /></Box></div> : null }
            { error ? <h1>Error al cargar los datos</h1> : null }
            { items.map(item => <Item key={item.id} item={item} />) }
        </div>
    );
}

export default ItemListCategory;