import * as S from "./style";
import ButtonToggle from "components/ButtonToggle";
import FavoriteItemList from "components/FavoriteItemList";
import ButtonLarge from "components/ButtonLarge";
import FavoriteItem from "components/FavoriteItem";
import { GenreItemType } from "types/GenreItemType";
import { HTMLAttributes, useEffect, useState } from "react";
import { GameResponse } from "types/Game";

type FavoriteDetailsType = HTMLAttributes<HTMLDivElement>;
type FavoriteDetailsProps = {
  favorites: GenreItemType[];
} & FavoriteDetailsType;

const FavoriteDetails = ({ favorites }: FavoriteDetailsProps) => {
  return (
    <S.FavoriteDetails>
      <S.FavoriteDetailsTitle>FAVORITOS</S.FavoriteDetailsTitle>
      <S.FavoriteDetailsButtonGroup>
        <ButtonToggle active={false} value="Jogos Favoritos" />
        <ButtonToggle active={false} value="Gêneros Favoritos" />
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
                  game={item.game}
                  quantity={item.game.idNumber}
                  genre={item.genre}
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
