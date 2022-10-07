import { games } from "mocks/game";
import * as S from "./style";
interface GameItemListProps {
  children: React.ReactNode;
}

const GameItemList = ({ children }: GameItemListProps) => {
  return (
    <section>
      <S.GameItemListHeader>
        <S.GameItemListHeaderTitle>Escolha seu jogo</S.GameItemListHeaderTitle>
        <S.GameItemListHeaderSelect>
          <option value="default">Selecionar</option>
          {games.map((game) => { return (<option value="">{ game.title}</option>)})}
        </S.GameItemListHeaderSelect>
      </S.GameItemListHeader>
      <S.GameItemList>{children}</S.GameItemList>
    </section>
  );
};

export default GameItemList;
