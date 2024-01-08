import React from "react";
import * as Styles from "./styles";

const RemoveSelectedItemsBtn = ({ isDisabled, handleClickDelete }) => {
  return (
    <Styles.Button disabled={isDisabled} onClick={handleClickDelete}>
      Delete Selected Items
    </Styles.Button>
  );
};

export default RemoveSelectedItemsBtn;
