import * as S from "./style";
import { ReactComponent as Trash } from "assets/icons/trash.svg";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { GameResponse } from "types/Game";
import { GenreItemType } from "types/GenreItemType";

type DivType = ButtonHTMLAttributes<HTMLDivElement>;

export type FavoriteItemProps = {
  game: GameResponse;
  genre: GenreItemType["genre"];
  quantity: number
  observation?: string;
} & DivType;

const FavoriteItem = ({
  game,
  genre,
  quantity = game.idNumber ,
  observation = "",
  ...props
}: FavoriteItemProps) => {
  const [quantityState, setQuantityState] = useState(quantity);
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
        <S.FavoriteItemRightTotalGames>{Number(quantityState)}</S.FavoriteItemRightTotalGames>
        <S.FavoriteItemRightTrash>
          <Trash />
        </S.FavoriteItemRightTrash>
      </S.FavoriteItemRight>
    </S.FavoriteItem>
  );
};

export default FavoriteItem;
