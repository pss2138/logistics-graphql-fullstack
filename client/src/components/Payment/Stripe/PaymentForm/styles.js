import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
`;

export const SubTitle = styled.div`
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 0.8rem;
`;

export const PaymentErrorMsg = styled.span`
  font-size: 1.2rem;
  color: #ff8182;
  font-weight: 600;
  margin-top: 5px;
`;

export const CheckCardSave = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => (props.isCardSave ? "white" : "90a0b7")};
  font-size: 1.4rem;
  margin-top: 1.6rem;

  cursor: pointer;
  & span {
    user-select: none;
    margin-left: 8px;
  }
`;

export const CardElementBg = styled.div`
  background-color: #2f313e;
  padding: 1.2rem 16px 1.2rem 16px;
  border-radius: 8px;
`;

export const SubmitBtn = styled.button`
  background-color: #24d982;
  opacity: ${(props) => (props.disabled ? 0.3 : undefined)};
  border: none;
  border-radius: 2.4rem;
  padding: 1.2rem 0;
  //margin-top: 2rem;
  margin-top: ${(props) => (props.isMobileSecondPage ? "25.8rem" : "2rem")};
  font-weight: 700;
  cursor: pointer;
`;
