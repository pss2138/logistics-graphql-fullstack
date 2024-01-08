import React from "react";
import * as Styles from "./styles";
import TotalItemsArea from "../TotalItemsArea";

const TableHeader = ({ itemType, itemsNum }) => {
  return (
    <Styles.Container>
      <TotalItemsArea itemType={itemType} itemsNum={itemsNum} />
    </Styles.Container>
  );
};

export default TableHeader;
