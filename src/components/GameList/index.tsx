import * as S from "./style";

const GameItem = () => {
  return (
    <S.GameItem>
      <S.GameItemImage src="" alt="" />
      <div>
        <S.GameItemName>Nome do Jogo</S.GameItemName>
        <S.GameItemGenre>Gênero</S.GameItemGenre>
        <S.GameItemDescription>
          Descrição
        </S.GameItemDescription>
      </div>
    </S.GameItem>
  );
};

export default GameItem;
