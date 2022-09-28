import Menu from "components/menu";
import * as S from "./style";
import { ReactComponent as Search } from "assets/icons/search.svg";

const Home = () => {
  return (
    <S.Home>
      <Menu />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>
                PrimeGames from Xbox{" "}
              </S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                Aqui ficará a data
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
            <p>Lista de jogos</p>
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
