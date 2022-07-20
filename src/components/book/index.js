//img
//name
//category
//price

// import { addToCart, removeToCart } from "../../store/modules/cart/actions";
import { addToCart, removeToCart } from "../../store/modules/cart/action";
import { useDispatch } from "react-redux";
import { Card, ImgCard, InfoCard, ButtonBook } from "./style";

function Book({ book, isRemove = false }) {
  const dispatch = useDispatch();
  // console.log(book.name);

  const { id, name, author, img, price, category } = book;

  return (
    <Card>
      <ImgCard>
        <img src={img} alt={name} />
      </ImgCard>
      <InfoCard>
        <h3>{name}</h3>
        <h5>{author}</h5>
        <h6>{category}</h6>
        <span>{price}</span>
        {isRemove ? (
          <ButtonBook onClick={() => dispatch(removeToCart(id))}>
            Remover
          </ButtonBook>
        ) : (
          <ButtonBook onClick={() => dispatch(addToCart(book))}>
            Adicionar
          </ButtonBook>
        )}
      </InfoCard>
    </Card>
  );
}

export default Book;

// <h3>{props.name}</h3>
// <h5>{props.author}</h5>
// <h6>{props.category}</h6>
// <span>{props.price}</span>
// {isRemove === true ? (
//   <ButtonBook onClick={() => dispatch(removeToCart(props.id))}>
//     Remover
//   </ButtonBook>
// ) : (
//   <ButtonBook
//     onClick={() =>
//       dispatch(
//         addToCart({
//           id: props.id,
//           name: props.name,
//           author: props.author,
//           img: props.img,
//           price: props.price,
//           category: props.category,
//         })
//       )
//     }
