import * as S from "./style";
import { ReactComponent as Trash } from "assets/icons/trash.svg";
import { games } from "mocks/game";
import { genres } from "mocks/genre";

const FavoriteItem = () => {
  return (
    <S.FavoriteItem>
      <S.FavoriteItemLeftTop>
        <S.FavoriteItemGame>
          <S.FavoriteItemGameImage src="" alt="nome do jogo" />
          <S.FavoriteItemGameDetails>
            <S.FavoriteItemGameDetailsName>
              Nome do jogo
            </S.FavoriteItemGameDetailsName>
            <S.FavoriteItemGameDetailsGenre>
              Gênero
            </S.FavoriteItemGameDetailsGenre>
          </S.FavoriteItemGameDetails>
        </S.FavoriteItemGame>
      </S.FavoriteItemLeftTop>
      <S.FavoriteItemRight>
        <S.FavoriteItemRightTotalGames>1</S.FavoriteItemRightTotalGames>
        <S.FavoriteItemRightTrash>
          <Trash />
        </S.FavoriteItemRightTrash>
      </S.FavoriteItemRight>
    </S.FavoriteItem>
  );
};

export default FavoriteItem;
