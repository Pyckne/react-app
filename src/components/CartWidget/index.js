import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


export default function ItemListContainer() {

    return (
            <Badge badgeContent={3}>
              <ShoppingCartIcon/>{" "}
            </Badge>
      );
    }