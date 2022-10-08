import * as S from "./style";
import ButtonToggle from "components/ButtonToggle";
import FavoriteItemList from "components/FavoriteItemList";
import ButtonLarge from "components/ButtonLarge";
import FavoriteItem from "components/FavoriteItem";

import { HTMLAttributes, useEffect, useState } from "react";
import { FavoriteType } from "types/FavoriteType";
import { GameResponse } from "types/Game";

type FavoriteDetailsType = HTMLAttributes<HTMLDivElement>;

type FavoriteDetailsProps = {
  favorites: GameResponse[];
  onChangeActiveFavoriteType: (data: FavoriteType) => void;
  onRemoveItem: (id: string) => void;
  activeFavoriteType: FavoriteType;
} & FavoriteDetailsType;

const FavoriteDetails = ({
  favorites,
  onChangeActiveFavoriteType,
  onRemoveItem,
  activeFavoriteType,
}: FavoriteDetailsProps) => {
  return (
    <S.FavoriteDetails>
      <S.FavoriteDetailsTitle>FAVORITOS</S.FavoriteDetailsTitle>
      <S.FavoriteDetailsButtonGroup>
        <ButtonToggle
          onClick={() => onChangeActiveFavoriteType(FavoriteType.JOGOS)}
          active={activeFavoriteType === FavoriteType.JOGOS}
          value="Jogos Favoritos"
        />
        <ButtonToggle
          onClick={() => onChangeActiveFavoriteType(FavoriteType.GENEROS)}
          active={activeFavoriteType === FavoriteType.GENEROS}
          value="Gêneros Favoritos"
        />
      </S.FavoriteDetailsButtonGroup>
      <S.FavoriteDetailsList>
        <FavoriteItemList
          // header={
          //   <S.FavoriteDetailsListTitle>
          //     <h4>mmmm</h4>
          //     <h4>hhhhh</h4>
          //     <h4>yyyy</h4>
          //   </S.FavoriteDetailsListTitle>
          // }
          list={
            Boolean(favorites.length) ? (
              favorites.map((item, index) => (
                <FavoriteItem
                  onRemoveItem={() => onRemoveItem(item.id)}
                  game={item}
                  key={`FavoriteDetails-${index}`}
                />
              ))
            ) : (
              <S.FavoriteDetailsListGap />
            )
          }
          footer={
            <S.FavoriteDetailsListFooter>
              {/* <S.FavoriteDetailsListFooterRow>
                <span>zzzzz</span>
                <span>xxxxx</span>
              </S.FavoriteDetailsListFooterRow> */}
              <ButtonLarge value="Adicionar aos Favoritos" />
            </S.FavoriteDetailsListFooter>
          }
        />
      </S.FavoriteDetailsList>
    </S.FavoriteDetails>
  );
};

export default FavoriteDetails;
