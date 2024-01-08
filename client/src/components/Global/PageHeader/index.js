import React from "react";
import * as Styles from "./styles";

const PageHeader = ({ title }) => {
  return (
    <Styles.Container>
      <Styles.TitleText>{title}</Styles.TitleText>
    </Styles.Container>
  );
};

export default PageHeader;
