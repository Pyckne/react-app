import './style.css';
import { useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function ItemCount(props) {

    const [itemCount, setItemCount] = useState(1);
    const stockQuantity = props.stock;
    return (
          <div className="ItemCount-container">
            <div className="ItemCount-item"> 
                <h3>{props.name}</h3>
                <p>Precio: {props.price}</p>
                <div className="ItemCount-buttons">
                    <ButtonGroup>
                        <Button
                            onClick={() => {
                            setItemCount(Math.max(itemCount - 1, 0));
                        }}>{" "}
                            <RemoveIcon fontSize="small" />
                        </Button>
                    </ButtonGroup>
                    <span>{itemCount}</span>
                    <ButtonGroup>
                        <Button
                            onClick={() => {
                            setItemCount(Math.min(itemCount + 1, stockQuantity));
                    }}>{" "}
                        <AddIcon fontSize="small" />
                        </Button>
                    </ButtonGroup>
                </div>
                <button className="ItemCount-add-button">Agregar al carrito</button>
            </div>
          </div>
      );
    }