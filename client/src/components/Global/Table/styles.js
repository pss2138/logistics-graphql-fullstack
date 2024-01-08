import styled from "styled-components";

export const Container = styled.div`
  margin: 16px 0;
  width: 97%;
  overflow-x: scroll;
`;
export const Table = styled.table`
  display: inline-block;
  border-spacing: 0;
  border: ${(props) => `2px solid ${props.theme.color.black100}`};
`;
export const THead = styled.thead``;
export const TR = styled.tr`
  :last-child {
    td {
      border-bottom: 0;
    }
  }
`;
export const TH = styled.th`
  padding: 0.5rem;
  border-bottom: ${(props) => `2px solid ${props.theme.color.black100}`};
  min-width: ${(props) => `${props.minWidth}px`};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const Resizer = styled.div`
  display: inline-block;
  background: ${(props) => props.theme.color.black100};
  width: 1px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  touch-action: none;
`;
export const TBody = styled.tbody``;
export const TD = styled.td`
  display: block;
  margin: 0;
  padding: 0.5rem;
  max-height: 100px;
  min-width: ${(props) => `${props.minWidth}px`};
  border-bottom: ${(props) => `1px solid ${props.theme.color.black100}`};
  border-right: ${(props) => `1px solid ${props.theme.color.black100}`};
  position: relative;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  :last-child {
    border-right: 0;
  }
`;
