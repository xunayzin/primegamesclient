import Menu from "components/menu";
import { DateTime } from "luxon";
import { ReactComponent as Search } from "assets/icons/search.svg";
import * as S from "./style";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import GameItemList from "components/GameItemList";
import FavoriteDetails from "components/FavoriteDetails";
import { games } from "mocks/game";
import { genres } from "mocks/genre";
import { useNavigate } from "react-router-dom";
import GameItem from "components/GameItem";
import { GameResponse } from "types/Game";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);
  const handleSelection = (game: GameResponse) => {};

  return (
    <S.Home>
      <Menu
        active={RoutePath.HOME}
        navItems={navigationItems}
        onNavigate={handleNavigation}
        onLogout={() => navigate(RoutePath.LOGIN)}
      />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>PRIMEGAMES from XBOX</S.HomeHeaderDetailsLogo>
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
            <GameItemList>
            {Boolean(games.length) &&
                games.map((game, index) => (
                  <GameItem
                    game={game}
                    key={`GameItem-${index}`}
                    onSelect={handleSelection}
                  />
                ))}
            </GameItemList>
          </S.HomeGameList>
        </div>
      </S.HomeContent>
      <aside>
        <FavoriteDetails favorites={genres} />
      </aside>
    </S.Home>
  );
};

export default Home;
