import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import { statuses } from "../../../../utils/variables";

const SelectCell = ({ initialValue, row: { original }, type }) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
    e.target.blur();
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    if (value !== initialValue) {
      setValue(initialValue);
    }
  }, [original]);

  return (
    <Styles.Container>
      <Styles.Select value={value.en} onChange={onChange}>
        {statuses[type].map((option, index) => {
          return (
            <Styles.Option key={index} value={option.en}>
              {option.label.en}
            </Styles.Option>
          );
        })}
      </Styles.Select>
    </Styles.Container>
  );
};

export default SelectCell;
