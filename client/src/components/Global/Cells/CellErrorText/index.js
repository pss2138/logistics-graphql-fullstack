import React from "react";
import * as Styles from "./styles";

const CellErrorText = ({ errorMsg }) => {
  return <Styles.ErrorText>{errorMsg}</Styles.ErrorText>;
};

export default CellErrorText;
