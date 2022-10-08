import * as S from "./style";
import { ReactComponent as Trash } from "assets/icons/trash.svg";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { GameResponse } from "types/Game";

type DivType = ButtonHTMLAttributes<HTMLDivElement>;

export type FavoriteItemProps = {
  game: GameResponse;
  genre?: string;
  idNumber?: number;
  observation?: string;
  onRemoveItem?: () => void;
} & DivType;

const FavoriteItem = ({
  game,
  genre,
  idNumber, 
  observation = "",
  onRemoveItem,
  ...props
}: FavoriteItemProps) => {
  const [quantityState, setQuantityState] = useState(idNumber);
  return (
    <S.FavoriteItem {...props} role="listitem">
      <S.FavoriteItemLeftTop>
        <S.FavoriteItemGame>
          <S.FavoriteItemGameImage src={game.coverImageUrl} alt={game.title} />
          <S.FavoriteItemGameDetails>
            <S.FavoriteItemGameDetailsName>
            {game.title}
            </S.FavoriteItemGameDetailsName>
            <S.FavoriteItemGameDetailsGenre>
            {genre}
            </S.FavoriteItemGameDetailsGenre>
          </S.FavoriteItemGameDetails>
        </S.FavoriteItemGame>
      </S.FavoriteItemLeftTop>
      <S.FavoriteItemRight>
        <S.FavoriteItemRightTotalGames>Total de jogos:{Number(quantityState)}</S.FavoriteItemRightTotalGames>
        <S.FavoriteItemRightTrash onClick={onRemoveItem}>
          <Trash />
        </S.FavoriteItemRightTrash>
      </S.FavoriteItemRight>
    </S.FavoriteItem>
  );
};

export default FavoriteItem;
