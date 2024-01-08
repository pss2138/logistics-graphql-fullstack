import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;
export const Input = styled.input`
  width: 100%;
  padding: 3px 5px;
  outline: ${(props) => props.isError && "2px solid red"};
  border-radius: 5px;
  pointer-events: ${(props) => props.isNonEditable && "none"};
  &:focus {
    outline: "2px solid blue";
  }
`;
