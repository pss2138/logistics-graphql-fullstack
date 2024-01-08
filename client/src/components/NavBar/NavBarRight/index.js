import React from "react";
import { useNavigate } from "react-router-dom";
import * as Styles from "./styles";

const NavBarRight = () => {
  // navigate
  const navigate = useNavigate();

  return (
    <Styles.Container>
      <Styles.HomeBtn
        onClick={() => {
          navigate("/");
        }}
      >
        <Styles.HomeBtnArea>Home</Styles.HomeBtnArea>
      </Styles.HomeBtn>
    </Styles.Container>
  );
};

export default NavBarRight;
