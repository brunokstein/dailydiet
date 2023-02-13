import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_GREEN};
`;

export const Body = styled.View`
    flex: 8;
    padding: 16px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    border-top-right-radius: 24px;
    border-top-left-radius: 24px;

    align-items: center;
`;

export const SecondContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}

    margin-bottom: 24px;
    margin-top: 16px;
`;