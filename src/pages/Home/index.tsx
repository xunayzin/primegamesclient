import Menu from "components/menu";
import * as S from "./style";
import { ReactComponent as Search } from "assets/icons/search.svg";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import { DateTime } from "luxon";
import GameItemList from "components/GameItemList";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });

  return (
    <S.Home>
      <Menu active={RoutePath.HOME} navItems={navigationItems} />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>
                PrimeGames from Xbox{" "}
              </S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                {dateDescription}
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Pesquisa" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeGameTitle>
            <b>Jogos</b>
          </S.HomeGameTitle>
          <S.HomeGameList>
            <GameItemList></GameItemList>
          </S.HomeGameList>
        </div>
      </S.HomeContent>
      <aside>
        <p>Favoritos</p>
      </aside>
    </S.Home>
  );
};

export default Home;
