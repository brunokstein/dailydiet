import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type IconTypeProps = "PRIMARY" | "SECONDARY"
export type IndicatorTypeProps = "PRIMARY" | "SECONDARY"

type IconProps = {
    type?: IconTypeProps;
}

type IndicatorProps = {
    type: IndicatorTypeProps;
}

export const Container = styled.View<IndicatorProps>`
    flex-direction: row;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};

    border-radius: 32px;
    align-items: center;

    width: ${({ type }) => type === "PRIMARY" ? 144 : 127}px;

    padding: 8px;
    margin-top: 8px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.REGULAR};   
    `}
    margin-left: 6px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs<IconProps>(({ theme, type }) => ({
    size: 12,
    color: type === "PRIMARY" ? theme.COLORS.GREEN : theme.COLORS.RED,
}))`
    margin-left: 8px;
`;