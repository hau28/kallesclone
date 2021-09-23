import styled from "styled-components";

export const DrawerContainer = styled.div`
  width: 320px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
`;

export const DrawerHeaderContainer = styled.div`
  padding: 0.75rem 0.25rem 0.75rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px whitesmoke;
  box-shadow: inset 0 -5px 5px whitesmoke;
`;
