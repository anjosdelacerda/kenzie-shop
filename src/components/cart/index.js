import { useSelector } from "react-redux";
import { BoxCart, TopBoxCart, BottomBoxCart, CartList } from "./style";

import BookCart from "../bookCart";

function Cart() {
  // const cart = useSelector((state) => state.cart);

  const cart = useSelector(({ cart }) => cart);
  const menu = useSelector(({ menu }) => menu);

  console.log(menu);

  if (cart.length < 1 && menu === true) {
    return (
      <BoxCart>
        <TopBoxCart>
          <h5>Meu Carrinho</h5>
        </TopBoxCart>
        <BottomBoxCart>
          <h3>A sua sacola está vazia</h3>
          <span>Aicione livros em seu carrinho</span>
        </BottomBoxCart>
      </BoxCart>
    );
  }

  if (menu === true) {
    return (
      <>
        <BoxCart>
          <TopBoxCart>
            <h5>Meu Carrinho</h5>
          </TopBoxCart>
          <BottomBoxCart>
            <CartList>
              {cart.map((book) => (
                <BookCart key={book.id} book={book} isRemove />
              ))}
            </CartList>
          </BottomBoxCart>
        </BoxCart>
      </>
    );
  } else {
    return null;
  }
}

export default Cart;

// key={book.id}
// id={book.id}
// img={book.img}
// name={book.name}
// price={book.price}
