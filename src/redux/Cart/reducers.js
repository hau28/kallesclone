let id = 0;

export default function cart(
  state = { list: [], open: false },
  { type, payload }
) {
  switch (type) {
    case "cart/open":
      return {
        ...state,
        open: true,
      };
    case "cart/close":
      return {
        ...state,
        open: false,
      };
    case "cart/add":
      return {
        ...state,
        list: [
          ...state?.list,
          {
            id: id++,
            imgUrl: payload.imgUrl,
            name: payload.name,
            price: payload.price,
            quantity: payload.quantity,
          },
        ],
      };
    case "cart/remove":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== payload),
      };
    case "cart/changeQuantity":
      console.log(payload.change);
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + payload.change }
            : item
        ),
      };
    default:
      return state;
  }
}
