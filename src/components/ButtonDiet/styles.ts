import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type IconTypeProps = "PRIMARY" | "SECONDARY"

export type ButtonDietStyleProps = {
    isActive?: boolean;
}

type IconProps = {
    type?: IconTypeProps;
}

export const FirstContainer = styled(TouchableOpacity) <ButtonDietStyleProps>`
    min-width: 156px;
    height: 50px;
    
    background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.LIGHT_GREEN : theme.COLORS.GRAY_100};
    border-radius: 6px;
    border-color: ${({ theme, isActive }) => isActive ? theme.COLORS.GREEN : theme.COLORS.GRAY_100};
    border-width: 1px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 16px;
    margin-top: 8px;
`;

export const SecondContainer = styled(TouchableOpacity) <ButtonDietStyleProps>`
    min-width: 156px;
    height: 50px;

    background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.LIGHT_RED : theme.COLORS.GRAY_100};
    border-radius: 6px;
    border-color: ${({ theme, isActive }) => isActive ? theme.COLORS.RED : theme.COLORS.GRAY_100};
    border-width: 1px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 16px;
    margin-top: 8px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.BOLD};   
    `}

    margin-left: 6px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs<IconProps>(({ theme, type }) => ({
    size: 12,
    color: type === "PRIMARY" ? theme.COLORS.GREEN : theme.COLORS.RED,
}))``;