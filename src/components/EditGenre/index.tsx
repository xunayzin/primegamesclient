import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";

const EditGenre = () => {
  return (
    <S.EditGenre>
      <>
        <S.EditGenreDetails>
          <S.EditGenreDetailsName>Gênero</S.EditGenreDetailsName>
        </S.EditGenreDetails>
        <S.EditGenreAction>
          <Pencil /> Editar
        </S.EditGenreAction>
      </>

      <>
        <label htmlFor="GenreId">Nome do Gênero</label>
        <S.EditForm id="GenreId" type="number" placeholder="01" />
        <S.Deletar>Deletar Mesa</S.Deletar>
      </>
    </S.EditGenre>
  );
};

export default EditGenre;