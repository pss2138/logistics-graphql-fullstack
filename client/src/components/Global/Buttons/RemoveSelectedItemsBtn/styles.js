import styled from "styled-components";
import { BasicButton } from "../../Buttons/BasicButton";

export const Button = styled(BasicButton)`
  font-size: 14px;
  color: ${(props) => props.theme.color.black100};
  padding: 3px 6px;
  border: ${(props) => `1px solid ${props.theme.color.grey200}`};
  opacity: ${(props) => (props.disabled ? "0.5" : "none")};
`;
