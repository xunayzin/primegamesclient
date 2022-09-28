import logo from "assets/imgs/logo.png";
import * as S from "./style";

const Menu = () => {
  return (
    <S.Menu>
      <nav>
        <S.MenuLogo>
          <img src={logo} alt="Logo" />
        </S.MenuLogo>
        <S.MenuItem>
          <S.MenuItemButton></S.MenuItemButton>
        </S.MenuItem>
      </nav>
    </S.Menu>
  );
};

export default Menu;
