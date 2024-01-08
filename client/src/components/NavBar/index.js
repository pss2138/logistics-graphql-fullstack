import React from "react";
import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";
import * as Styles from "./styles";

const NavBar = () => {
  return (
    <Styles.Container>
      <NavBarLeft />
      <NavBarRight />
    </Styles.Container>
  );
};

export default NavBar;
