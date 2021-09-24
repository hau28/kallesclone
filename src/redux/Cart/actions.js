export function openCart() {
  return {
    type: "cart/open",
  };
}

export function closeCart() {
  return {
    type: "cart/close",
  };
}

export function addToCart(newItem) {
  return {
    type: "cart/add",
    payload: newItem,
  };
}

export function removeFromCart(itemId) {
  return {
    type: "cart/remove",
    payload: itemId,
  };
}

export function changeCartItemQuantity(changeInfo) {
  return {
    type: "cart/changeQuantity",
    payload: changeInfo,
  };
}
