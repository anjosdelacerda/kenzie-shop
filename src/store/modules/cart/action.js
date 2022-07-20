export const addToCart = (book) => ({ type: "@cart/ADD", book });

export const removeToCart = (id) => ({ type: "@cart/REMOVE", id });
