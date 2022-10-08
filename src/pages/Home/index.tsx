import Menu from "components/menu";
import { DateTime } from "luxon";
import { ReactComponent as Search } from "assets/icons/search.svg";
import * as S from "./style";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import GameItemList from "components/GameItemList";
import FavoriteDetails from "components/FavoriteDetails";
import { mocksgames } from "mocks/game";
import { useNavigate } from "react-router-dom";
import GameItem from "components/GameItem";
import { GameResponse } from "types/Game";
import { FavoriteType } from "types/FavoriteType";
import { useEffect, useState } from "react";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });

  const navigate = useNavigate();

  const [activeFavoriteType, setActiverFavoriteType] = useState(
    FavoriteType.JOGOS
  );

  const [favorites, setFavorites] = useState<GameResponse[]>([]);

  useEffect(() =>
  {
    setFavorites(mocksgames)
  }, [])

  const handleNavigation = (path: RoutePath) => navigate(path);

  const handleSelection = (games: GameResponse) => {
    const existing = favorites.find((game) => game.id === games.id);
    const view = existing
      ? existing.coverImageUrl
      : console.log(console.error());
    const item: GameResponse = games;

    const list = existing
      ? favorites.filter((game) => (game.id === existing.id ? item : game))
      : [...favorites, item];
    setFavorites(list);
  };

  const handleRemoveFavoriteItem = (id: string) => {
    const filtered = favorites.filter((game) => game.id != id);
    setFavorites(filtered);
  };

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
              <S.HomeHeaderDetailsLogo>
                PRIMEGAMES from XBOX
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
            <GameItemList>
              {Boolean(favorites.length) &&
                favorites.map((game, index) => (
                  <GameItem
                    games={game}
                    key={`GameItem-${index}`}
                    onClick={() => handleSelection(game)}
                  />
                ))}
            </GameItemList>
          </S.HomeGameList>
        </div>
      </S.HomeContent>
      <aside>
        <FavoriteDetails
          onRemoveItem={handleRemoveFavoriteItem}
          favorites={favorites}
          onChangeActiveFavoriteType={(data) => setActiverFavoriteType(data)}
          activeFavoriteType={activeFavoriteType}
        />
      </aside>
    </S.Home>
  );
};

export default Home;
