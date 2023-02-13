import styled, { css } from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type HeaderBackgroundColorProps = "GRAYSTYLE" | "GREENSTYLE" | "REDSTYLE";

type Props = {
    type: HeaderBackgroundColorProps;
}

export const Container = styled.View <Props>`
    width: 100%;
    flex: 1;

    background-color: ${({ theme, type }) => type === "GREENSTYLE" ? theme.COLORS.LIGHT_GREEN : (type === "GRAYSTYLE" ? theme.COLORS.GRAY_200 : theme.COLORS.LIGHT_RED)};
      
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0 16px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}

    flex: 3;
`;

export const BackButton = styled.TouchableOpacity`
   flex: 2;
`;

export const BackIcon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_400
}))``;