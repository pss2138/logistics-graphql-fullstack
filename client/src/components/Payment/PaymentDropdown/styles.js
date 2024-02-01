import styled from "styled-components";

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SelectBox = styled.div`
  border: 1px solid #717f92;
  background-color: transparent;
  padding: 1rem 1rem 1rem 1.6rem;
  border-radius: 0.8rem;
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  margin-left: 4rem;
  cursor: pointer;
`;

export const SelectBoxArrow = styled.img`
  margin-left: 1.2 rem;
`;

export const OptionsBox = styled.div`
  z-index: 30;
  border: 1px solid #90a0b7;
  border-radius: 0.8rem;
  background-color: #23242b;
  position: absolute;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px 0 8px 0;
`;

export const Option = styled.span`
  display: flex;
  color: ${(props) => (props.isSelected ? "#24d982" : "white")};
  padding: "8px 16px 8px 20px";
  font-size: 1.3rem;
  cursor: pointer;
  &:hover {
    background-color: #2f313e;
  }
  justify-content: center;
  text-align: center;
`;
