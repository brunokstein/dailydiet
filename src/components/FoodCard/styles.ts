import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type IconTypeProps = "PRIMARY" | "SECONDARY"

type Props = {
    type: IconTypeProps;
}

export const Container = styled(TouchableOpacity)`
    width: 100%;
    //height: 20px;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 6px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-width: 1px;

    flex-direction: row;
    align-items: center;
    
    padding: 12px;
    margin-bottom: 8px;
`;

export const SecondContainer = styled.View`
    align-items: center;
    flex-direction: row;
    flex: 1;
`;

export const Divider = styled.View`
    width: 0px;
    height: 16px;

    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_200};

    margin-right: 10px;
    margin-left: 10px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_400};
        font-family: ${theme.FONT_FAMILY.REGULAR};   
    `}
`;

export const Time = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.BOLD};   
    `}
`;

export const Icon = styled(MaterialCommunityIcons).attrs<Props>(({ theme, type }) => ({
    size: 18,
    color: type === "PRIMARY" ? theme.COLORS.LIGHT_GREEN : theme.COLORS.LIGHT_RED,
}))``;