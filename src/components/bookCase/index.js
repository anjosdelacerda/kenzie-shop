import Book from "../book";
import { useSelector } from "react-redux";
import { Lista } from "./style";

function BookCase() {
  // const books = useSelector((state) => state.books);
  // console.log(books);

  const books = useSelector(({ books }) => books);

  return (
    <>
      <Lista>
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            // id={book.id}
            // img={book.img}
            // name={book.name}
            // author={book.author}
            // category={book.category}
            // price={book.price}
          />
        ))}
      </Lista>
    </>
  );
}

export default BookCase;
