import React from "react";
import * as Styles from "./styles";
import TotalItemsArea from "../TotalItemsArea";
import AddItemsBtn from "../Buttons/AddItemsBtn";

const AddItemsArea = ({
  itemType,
  itemsNum,
  setItems,
  uploadItemsMutation,
}) => {
  return (
    <Styles.Container>
      <TotalItemsArea itemType={itemType} itemsNum={itemsNum} />
      <AddItemsBtn
        itemType={itemType}
        setItems={setItems}
        uploadItemsMutation={uploadItemsMutation}
      />
    </Styles.Container>
  );
};

export default AddItemsArea;
