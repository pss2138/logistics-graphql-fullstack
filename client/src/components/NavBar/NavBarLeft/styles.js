import styled from "styled-components";
import { BasicButton } from "../../Global/Buttons/BasicButton";

export const Container = styled.div`
  display: flex;
`;
export const HomeBtn = styled(BasicButton)``;
export const LogoImg = styled.img``;
export const Menus = styled.div`
  margin-left: 18px;
`;
export const MenuBtn = styled(BasicButton)`
  margin-left: 9px;
  color: ${(props) =>
    props.isactive ? props.theme.color.white : props.theme.color.grey100};
  &:hover {
    color: ${(props) => props.theme.color.white};
  }
`;
