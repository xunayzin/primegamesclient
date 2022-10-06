import Menu from "components/menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import * as S from "./style";
import { Outlet } from "react-router-dom";
import NavColumn from "components/NavColumn";

const Settings = () => {
  return (
    <S.Settings>
      <Menu active={RoutePath.SETTINGS} navItems={navigationItems} />
      <S.SettingsPage>
        <header>
          <S.SettingsPageHeaderTitle>Configurações</S.SettingsPageHeaderTitle>
        </header>
        <S.SettingsContent>
          <S.SettingsContentSidebar>
            {/* Trecho precisa ser alterado posteriormente */}
            <NavColumn activeRoute={RoutePath.SETTINGS_GENRE} />
          </S.SettingsContentSidebar>
          <S.SettingsContentBox>
            <S.SettingsContentBoxEmpty>
              Selecione uma categoria
            </S.SettingsContentBoxEmpty>
            <Outlet />
          </S.SettingsContentBox>
        </S.SettingsContent>
      </S.SettingsPage>
    </S.Settings>
  );
};

export default Settings;