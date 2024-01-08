import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
`;
export const Divider = styled.div`
  width: 100%;
  border: ${(props) => `0.5px solid ${props.theme.color.grey100}`};
`;
