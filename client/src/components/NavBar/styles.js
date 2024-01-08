import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  height: 55px;
  z-index: 10;
  width: 100%;
  background-color: ${(props) => props.theme.color.black250};
  color: ${(props) => props.theme.color.white};
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px 0 18px;
`;
