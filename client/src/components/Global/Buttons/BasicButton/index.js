import styled from "styled-components";

export const BasicButton = styled.button`
  opacity: ${(props) => (props.disabled ? "30%" : "none")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
