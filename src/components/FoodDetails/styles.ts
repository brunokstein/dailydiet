import styled, { css } from 'styled-components/native';

export type TitleStyleProps = "PRIMARY" | "SECONDARY"

type TitleProps = {
    type: TitleStyleProps;
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE};

`;

export const Title = styled.Text<TitleProps>`
    ${({ theme, type }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${type === "PRIMARY" ? theme.FONT_SIZE.LG : theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    margin-bottom: 8px;
    margin-top: 8px;
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    margin-bottom: 16px;
`;