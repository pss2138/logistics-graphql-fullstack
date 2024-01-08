import React, { useEffect, useState } from "react";
import * as Styles from "./styles";

const NonEditableCell = ({ initialValue, row: { original } }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (value !== initialValue) {
      setValue(initialValue);
    }
  }, [original]);

  return <Styles.NonEditable>{value}</Styles.NonEditable>;
};

export default NonEditableCell;
