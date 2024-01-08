import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 55px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.white};
  padding: 3rem;
  border-radius: 1.5rem;
`;
export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Title = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
`;
export const SubTitle = styled.span`
  margin: 1rem 0;
`;
export const ButtonsArea = styled.div`
  width: 100%;
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const CancelButton = styled.button`
  min-width: 5rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  color: ${(props) => props.theme.color.black200};
`;
export const ConfirmButton = styled(CancelButton)`
  background-color: ${(props) => props.theme.color.red};
  font-weight: 600;
`;
