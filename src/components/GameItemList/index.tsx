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
          <option value="">xxxxx</option>
        </S.GameItemListHeaderSelect>
      </S.GameItemListHeader>
      <S.GameItemList>{children}</S.GameItemList>
    </section>
  );
};

export default GameItemList;
