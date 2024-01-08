import React from "react";
import { useNavigate } from "react-router-dom";
import * as Styles from "./styles";

const NavBarLeft = () => {
  const navigate = useNavigate();
  const menus = [{ text: "Order", path: "/" }];

  const handleClickMenu = (path) => {
    navigate(path);
  };

  return (
    <Styles.Container>
      <Styles.HomeBtn
        onClick={() => {
          handleClickMenu("/");
        }}
      >
        Logistics - GraphQL
        <Styles.LogoImg />
      </Styles.HomeBtn>
      <Styles.Menus>
        {menus.map((menu) => (
          <Styles.MenuBtn
            onClick={() => {
              handleClickMenu(menu.path);
            }}
            isactive={
              menu.path === window.location.pathname ? "true" : undefined
            }
            key={menu.path}
          >
            {menu.text}
          </Styles.MenuBtn>
        ))}
      </Styles.Menus>
    </Styles.Container>
  );
};

export default NavBarLeft;
