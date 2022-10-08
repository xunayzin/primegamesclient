import * as S from "./style";
import { GameResponse } from "types/Game";

type GameItemProps = {
  games: GameResponse;
};

const GameItem = ({ games }: any) => {
  return (
    <S.GameItem role="listitem">
      <S.GameItemImage src={games.coverImageUrl} alt={games.title} />
      <div>
        <S.GameItemName>{games.title}</S.GameItemName>
        <S.GameItemYear>{games.year}</S.GameItemYear>
        <S.GameItemDescription>{games.description}</S.GameItemDescription>
      </div>
    </S.GameItem>
  );
};

export default GameItem;
