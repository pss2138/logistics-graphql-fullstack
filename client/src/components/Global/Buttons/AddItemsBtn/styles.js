import styled from "styled-components";
import { BasicButton } from "../BasicButton";

export const AddItemsBtn = styled(BasicButton)`
  background-color: ${(props) => props.theme.color.main};
  font-size: 16px;
  padding: 6px 12px;
`;
