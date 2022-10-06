import * as S from "./style";

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
    </S.FavoriteItem>
  );
};

export default FavoriteItem;
