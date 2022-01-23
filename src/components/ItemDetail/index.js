import './style.css';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

function ItemDetail (item) {
    return (
      <div className="ItemDetail-container">
        <div className="ItemDetail-img-container"> 
          <img className="ItemDetail-img" src={item.pictureUrl} alt=""/>
        </div>
        <div className="ItemDetail-info-container">
          <h2 className="ItemDetail-tittle">{item.tittle}</h2>
          <p className="ItemDetail-price">${item.price}</p>
          <p className="ItemDetail-description">{item.description}</p>
        </div>
        <div className="ItemDetail-actions-container">
          <h3 className="ItemDetail-stock-tittle">Stock disponible:</h3>
          <Box sx={{ minWidth: 100 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Cantidad
              </InputLabel>
              <NativeSelect
                defaultValue={1}
                inputProps={{
                  name: 'Cantidad',
                  id: 'uncontrolled-native',
                }}
              >
                { [...Array(item.stock).keys()].map(i => <option key={i} value={i+1}>{i+1}</option>) }
              </NativeSelect>
            </FormControl>
          </Box>
          <span className="ItemDetail-stock">({item.stock} disponibles)</span>
          <button className="ItemDetail-button">Agregar al carrito</button>
        </div>
      </div>
      
    );
  }
  
  export default ItemDetail;