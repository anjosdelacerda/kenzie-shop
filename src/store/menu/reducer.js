const menuReducer = (state = false, action) => {
  switch (action.type) {
    case "@menu/SHOW":
      const { menu } = action;
      console.log(menu);
      return menu === false ? (state = true) : (state = false);

    default:
      return state;
  }
};

export default menuReducer;

// if ((state = false)) {
//     state = true;
//   }

//   if ((state = true)) {
//     state = false;
//   }
