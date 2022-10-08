import { mocksgames } from "mocks/game";
import * as S from "./style";
interface GameItemListProps {
  children: React.ReactNode;
}

const GameItemList = ({ children }: any) => {
  return (
    <section>
      <S.GameItemListHeader>
        <S.GameItemListHeaderTitle>Escolha seu jogo</S.GameItemListHeaderTitle>
        <S.GameItemListHeaderSelect>
          <option value="default">Selecionar</option>
          {mocksgames.map((game) => { return (<option key={game.id} value="">{ game.title}</option>)})}
        </S.GameItemListHeaderSelect>
      </S.GameItemListHeader>
      <S.GameItemList>{children}</S.GameItemList>
    </section>
  );
};

export default GameItemList;
