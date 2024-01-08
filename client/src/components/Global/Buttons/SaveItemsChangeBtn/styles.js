import styled from "styled-components";
import { BasicButton } from "../BasicButton";

export const Button = styled(BasicButton)`
  font-size: 14px;
  color: ${(props) => props.theme.color.white};
  padding: 3px 6px;
  background-color: ${(props) => props.theme.color.main};
`;
