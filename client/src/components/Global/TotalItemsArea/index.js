import React from "react";
import * as Styles from "./styles";

const TotalItemsArea = ({ itemType, itemsNum }) => {
  return (
    <Styles.TotalItemsArea>
      <Styles.TotalItemsIcon />
      <Styles.TotalItemsTitle>
        Total {itemType[0].toUpperCase()}
        {itemType.slice(1)}
      </Styles.TotalItemsTitle>
      <Styles.TotalItemsNum>{itemsNum}</Styles.TotalItemsNum>
    </Styles.TotalItemsArea>
  );
};

export default TotalItemsArea;
