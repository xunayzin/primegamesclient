import * as S from "./style";

const GameItemList = () => {
	return (
		<section>
			<S.GameItemListHeader>
				<S.GameItemListHeaderTitle>
					Escolha seu jogo
				</S.GameItemListHeaderTitle>
				<S.GameItemListHeaderSelect>
					<option value="default">Selecionar</option>
					<option value="">xxxxx</option>
				</S.GameItemListHeaderSelect>
			</S.GameItemListHeader>
			<S.GameItemList></S.GameItemList>
		</section>
	);
};

export default GameItemList;