import { Nav, Icon } from "./style";
// import { showCart } from "../../store/menu/actions";
import { showCart } from "../../store/menu/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Menu() {
  const menu = useSelector(({ menu }) => menu);
  const dispatch = useDispatch();
  return (
    <>
      <Nav>
        <h1>
          Kenzie<span>shop</span>
        </h1>
        <Icon>
          <img
            onClick={() => dispatch(showCart(menu))}
            src="https://cdn.iconscout.com/icon/free/png-256/cart-2324844-2132463.png"
            alt="Carrinho de compras"
          />
        </Icon>
      </Nav>
    </>
  );
}

export default Menu;
