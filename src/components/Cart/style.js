import styled from "styled-components";

export const ItemList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
`;

export const CartItemContainer = styled.div`
  display: flex;
  padding: 1.25rem;
`;

export const CartItemImg = styled.img`
  width: 128px;
  height: 150px;
  object-fit: cover;
`;

export const Price = styled.p`
  color: gray;
  font-size: 0.85rem;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 2rem 1.25rem;
  box-shadow: 0 -10px 10px whitesmoke;
`;
