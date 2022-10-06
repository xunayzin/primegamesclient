import { HTMLAttributes } from "react";
import { ReactComponent as Add } from "assets/icons/add.svg";
import * as S from "./style";

type ManageGenresType = HTMLAttributes<HTMLDivElement>;

type ManageGenresProps = {} & ManageGenresType;

const ManageGenres = ({ ...props }: ManageGenresProps) => {
  return (
    <S.ManageGenres {...props}>
      <S.ManageGenresTitle>Gerenciar Gêneros</S.ManageGenresTitle>
      <S.ManageGenresSub>
        <b>Gêneros</b>
      </S.ManageGenresSub>
      <S.ManageGenresContent>
        <S.ManageGenresContentAdd>
          <Add />
          <span>Adicionar gênero</span>
        </S.ManageGenresContentAdd>
        <S.ManageGenresContentAdd>
          <label htmlFor="GenreId">Nome do Gênero</label>
          <S.EditForm id="GenreId" type="number" placeholder="01" />
        </S.ManageGenresContentAdd>
        {"Componente EditGenre"}
      </S.ManageGenresContent>
      <S.ManageGenresActions>
        <S.ManageGenresActionsCancel>Cancelar</S.ManageGenresActionsCancel>
        <S.ManageGenresActionsSave>Salvar Mudanças</S.ManageGenresActionsSave>
      </S.ManageGenresActions>
    </S.ManageGenres>
  );
};

export default ManageGenres;