import styled, { css } from "styled-components";

export const FavoriteDetails = styled.section`
	${({ theme }) => css`
		width: 350px;
		justify-self: end;
		background: ${theme.colors.baseBg2};
		padding: 20px;
		box-sizing: bFavorite-box;
		overflow: auto;
		min-height: 100vh;
	`}
`;

export const FavoriteDetailsTitle = styled.h2`
	${({ theme }) => css`
		${theme.mixins.headingStyle()};
		font-size: 20px;
		font-weight: 600;
		margin: 0;
	`}
`;

export const FavoriteDetailsButtonGroup = styled.div`
	${() => css`
		display: flex;
		justify-content: flex-start;
		gap: 10px;
		margin-top: 10px;
	`}
`;

export const FavoriteDetailsList = styled.div`
	${() => css`
		margin-top: 16px;
	`}
`;

export const FavoriteDetailsListTitle = styled.div`
	${() => css`
		display: flex;
		justify-content: flex-start;
		h4 {
			display: inline-block;
			margin: 0;
			&:nth-child(1) {
				width: 190px;
			}
			&:nth-child(2) {
				width: 50px;
			}
		}
	`}
`;

export const FavoriteDetailsListGap = styled.div`
	${({ theme }) => css`
		height: 90px;
		background: ${theme.colors.baseBg1};
		border-radius: 8px;
	`}
`;

export const FavoriteDetailsListFooter = styled.div`
	${() => css`
		margin-top: 15px;
		display: flex;
		flex-direction: column;
		gap: 15px;
	`}
`;

export const FavoriteDetailsListFooterRow = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: space-between;
		${theme.mixins.bodyStyle()};
		span:nth-child(1) {
			color: ${theme.colors.textLight};
			font-weight: 400;
		}
		span:nth-child(2) {
			color: ${theme.colors.textColor};
			font-size: 16px;
			font-weight: 500;
		}
	`}
`;

export const FavoriteDetailsListFooterWarning = styled.span`
	${({ theme }) => css`
		${theme.mixins.bodyStyle()};
		color: ${theme.colors.secondaryColor};
		font-weight: 500;
		font-size: 16px;
	`}
`;