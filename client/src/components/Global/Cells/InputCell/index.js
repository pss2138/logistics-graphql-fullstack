import React, { useEffect, useState } from "react";
import {
  errorMsgs,
  regexAnyAlphabetNumber,
  regexAnyNumber,
  updatingRow,
} from "../../../../utils/variables";
import CellErrorText from "../CellErrorText";
import * as Styles from "./styles";
import { toastError } from "../../../../style/styleUtils";

const InputCell = ({
  initialValue,
  row: { index, original },
  columnId,
  handleUpdateItems,
  ...validations
}) => {
  const [value, setValue] = useState(initialValue);
  const [errorMsg, setErrorMsg] = useState();
  let errorText = undefined;

  const handleValidations = (event) => {
    if (validations.isNumberOnly) {
      const isError = !regexAnyNumber.test(event.target.value);
      errorText = isError ? errorMsgs.NUM_ONLY.message : undefined;
    } else if (validations.isAlphabetNumberOnly) {
      const isError = !regexAnyAlphabetNumber.test(event.target.value);
      errorText = isError ? errorMsgs.ALPHABET_NUM_ONLY.message : undefined;
    } else if (event.target.value.length > 300) {
      errorText = errorMsgs.TOO_MANY_LETTERS.message;
    } else {
      errorText = undefined;
    }
  };

  const handleZeroStartNumber = (numString) => {
    if (validations.isNumberOnly) return Number(numString);
    return numString;
  };

  const onChange = (e) => {
    handleValidations(e);

    if (errorText === undefined) {
      setErrorMsg();
      setValue(e.target.value);
    } else {
      setErrorMsg(errorText);
      errorText = undefined;
    }
  };
  // Only update the external data when the input is blurred
  const onBlur = () => {
    if (errorMsg === undefined) {
      let validValue = value;
      validValue = handleZeroStartNumber(validValue);
      try {
        handleUpdateItems(index, original._id, { [columnId]: validValue });
      } catch {
        toastError(errorMsgs.ON_PROCESS.message);
      }
    }

    if (errorText === undefined) {
      setErrorMsg();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  useEffect(() => {
    if (value !== initialValue) {
      setValue(initialValue);
    }
  }, [original]);

  return (
    <Styles.Container>
      {errorMsg && <CellErrorText errorMsg={errorMsg} />}
      <Styles.Input
        value={value === undefined ? "" : value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyPress={handleKeyPress}
        isError={errorMsg ? true : undefined}
        isNonEditable={validations.isNonEditable ? true : undefined}
      />
    </Styles.Container>
  );
};

export default InputCell;
