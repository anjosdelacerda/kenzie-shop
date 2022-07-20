import { useDispatch } from "react-redux";
import { ButtonBook } from "../book/style";
// import { addToCart, removeToCart } from "../../store/modules/cart/actions";
import { addToCart, removeToCart } from "../../store/modules/cart/action";
// import { ImgIcon, Item } from "./styled";
import { ImgIcon, Item } from "./style";

function BookCart({ book, isRemove = false }) {
  const dispatch = useDispatch();
  // console.log(book.name);

  const { id, name, img } = book;

  return (
    <Item>
      <ImgIcon>
        <img src={img} alt={name} />
      </ImgIcon>

      <h3>{name}</h3>
      {isRemove ? (
        <ButtonBook onClick={() => dispatch(removeToCart(id))}>
          Remover
        </ButtonBook>
      ) : (
        <ButtonBook onClick={() => dispatch(addToCart(book))}>
          Adicionar
        </ButtonBook>
      )}
    </Item>
  );
}

export default BookCart;
