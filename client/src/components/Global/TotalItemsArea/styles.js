import styled from "styled-components";

export const TotalItemsArea = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TotalItemsIcon = styled.img``;
export const TotalItemsTitle = styled.span`
  color: ${(props) => props.theme.color.grey300};
`;
export const TotalItemsNum = styled.span`
  font-size: 18px;
`;
