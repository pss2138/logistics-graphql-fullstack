import React from "react";
import * as Styles from "./styles";

const SaveItemsChangeBtn = ({ isLoading, saveUpdatingItems }) => {
  return (
    <Styles.Button disabled={isLoading} onClick={saveUpdatingItems}>
      Save Updated Items
    </Styles.Button>
  );
};

export default SaveItemsChangeBtn;
