import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export type TextInputTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: TextInputTypeStyleProps;
}

export const Container = styled.View`
`;

export const InputContainer = styled(TextInput) <Props>`
    
    min-height: ${({ type }) => type === "PRIMARY" ? 48 : 128}px;
    max-height: ${({ type }) => type === "PRIMARY" ? 48 : 128}px;
    
    min-width: 156px;

    ${({ theme }) => css`
        background-color: ${theme.COLORS.WHITE };
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}

    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 6px;
    padding: 16px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_400};
        font-family: ${theme.FONT_FAMILY.BOLD};   
    `}
    
    margin-top: 16px;
    margin-bottom: 4px;
`;
