import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export type ButtonBackgroundColorStyleProps = "PRIMARY" | "SECONDARY";
export type ButtonTextColorProps = "WHITESTYLE" | "GRAYSTYLE";
export type ButtonIconColorProps = "LIGHTGRAYCOLOR" | "GRAYCOLOR";

type ButtonColorType = {
    type: ButtonBackgroundColorStyleProps;
}

type TextColorType = {
    type: ButtonTextColorProps;
}

type IconColorType = {
    type: ButtonIconColorProps;
}

export const Container = styled(TouchableOpacity) <ButtonColorType> `
    flex: 1;
    flex-direction: row;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GRAY_400 : theme.COLORS.WHITE};
    
    border-width: 1px;
    border-radius: 6px;

    justify-content: center;
    align-items: center;
    
    padding: 16px;

    margin-top: 8px;
`;

export const Title = styled.Text <TextColorType> `
    ${({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${type === "WHITESTYLE" ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const Icon = styled(Feather).attrs<IconColorType>(({ theme, type }) => ({
    size: 16,
    color: type === "GRAYCOLOR" ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_100
}))`
    margin-right: 8px;
`;
