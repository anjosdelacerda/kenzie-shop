const cartReducer = (state = [], action) => {
  // const dispatch = useDispatch();

  switch (action.type) {
    case "@cart/ADD":
      const { book } = action;

      const verification = state.every((item) => item.id !== book.id);

      if (verification === false) {
        console.log(verification);
      }

      if (verification === true) {
        return [...state, book];
      }
      break;

    case "@cart/REMOVE":
      const { id } = action;

      const newList = state.filter((book) => book.id !== id);

      return newList;

    default:
      return state;
  }
};

export default cartReducer;
