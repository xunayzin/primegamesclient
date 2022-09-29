import * as S from "./style";
import ButtonToggle from "components/ButtonToggle";

const FavoriteDetails = () => {
  return (
    <S.FavoriteDetails>
      <S.FavoriteDetailsTitle>FAVORITOS</S.FavoriteDetailsTitle>
      <S.FavoriteDetailsButtonGroup>
        <ButtonToggle active={false} value="Jogos Favoritos" />
        <ButtonToggle active={false} value="Gêneros Favoritos" />
      </S.FavoriteDetailsButtonGroup>
      <S.FavoriteDetailsList>
        <p>Itens</p>
      </S.FavoriteDetailsList>
    </S.FavoriteDetails>
  );
};

export default FavoriteDetails;
