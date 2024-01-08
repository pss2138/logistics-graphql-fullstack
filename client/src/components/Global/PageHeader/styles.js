import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 55px;
  height: 55px;
  font-size: 18px;
  background-color: ${(props) => props.theme.color.white};
`;
export const TitleText = styled.span`
  margin: 0 0 0 18px;
`;
