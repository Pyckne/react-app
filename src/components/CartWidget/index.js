import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";


export default function CartWidget() {

  const {totalItems} = useContext(CartContext);

  return (
    <Badge badgeContent={totalItems}>
      <ShoppingCartIcon/>{" "}
    </Badge>
  );
}