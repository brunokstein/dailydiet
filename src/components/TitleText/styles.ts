import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    margin-top: 24px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_400};
        font-family: ${theme.FONT_FAMILY.BOLD};   
    `}
    margin-bottom: 6px;
`;
