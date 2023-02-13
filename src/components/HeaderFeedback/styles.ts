import styled, { css } from 'styled-components/native';

export type TitleStyleProps = "PRIMARY" | "SECONDARY"
export type SubtitleStyleProps = "BOLD" | "REGULAR"

type TitleProps = {
    type: TitleStyleProps;
}

type SubtitleProps = {
    type: SubtitleStyleProps;
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text<TitleProps>`
    ${({ theme, type }) => css`
        color: ${type === "PRIMARY" ? theme.COLORS.GREEN : theme.COLORS.RED};
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    margin-bottom: 8px;
`;

export const Subtitle = styled.Text<SubtitleProps>`
    ${({ theme, type }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${type === "BOLD" ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    `}
    text-align: center;
`;