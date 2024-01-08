import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledToast = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    white-space: pre-line;
    padding-top: 55px;
  }
  .Toastify__toast {
  }
`;
export const Container = styled.div`
  min-height: 100vh;
  margin-top: 55px;
  padding-bottom: 18px;
  background-color: ${(props) => props.theme.color.bg200};
`;
export const PageContainer = styled.div`
  margin: 0 16px;
`;
