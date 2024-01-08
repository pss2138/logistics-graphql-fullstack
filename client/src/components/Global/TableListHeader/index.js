import React from "react";
import RemoveSelectedItemsBtn from "../Buttons/RemoveSelectedItemsBtn";
import SaveItemsChangeBtn from "../Buttons/SaveItemsChangeBtn";
import * as Styles from "./styles";

const TableListHeader = ({
  isUpdateItemLoading,
  saveUpdatingItems,
  isRemoveBtnDisabled,
  handleClickDelete,
}) => {
  return (
    <Styles.Container>
      <RemoveSelectedItemsBtn
        isDisabled={isRemoveBtnDisabled}
        handleClickDelete={handleClickDelete}
      />
      <SaveItemsChangeBtn
        isLoading={isUpdateItemLoading}
        saveUpdatingItems={saveUpdatingItems}
      />
    </Styles.Container>
  );
};

export default TableListHeader;
