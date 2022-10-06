import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";


const EditGame = () => {
    return (
        <S.EditGame>
            <>
                <S.EditGameImage src="" alt="Pizza de..." />
                <S.EditGameDetails>
                    <S.EditGameDetailsName>Nome do Jogo</S.EditGameDetailsName>
                    <S.EditGameDetailsGenre>Gênero do Jogo</S.EditGameDetailsGenre>
                    <S.EditGameDetailsDescription>Descrição</S.EditGameDetailsDescription>
                </S.EditGameDetails>

                <S.EditGameAction>
                    <Pencil /> Editar
                </S.EditGameAction>
            </>
            <S.EditFormGroup>
                <S.EditForm
                    type="text"
                    placeholder="Título"
                />
                <S.EditForm
                    type="text"
                    placeholder="Gênero"
                />
                <S.EditForm
                    type="text"
                    placeholder="Descrição"
                />
                <S.EditForm
                    type="url"
                    placeholder="Imagem"
                />
                <S.Delete>Deletar</S.Delete>
            </S.EditFormGroup>
        </S.EditGame>
    );
}

export default EditGame;