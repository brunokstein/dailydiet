import styled, { css } from 'styled-components/native';

export type StaticCardTypeProps = "PRIMARY" | "SECONDARY"

type Props = {
    type: StaticCardTypeProps;
}

export const FirstContainer = styled.View`
   width: 100%;
   height: 90px;

   background-color: ${({ theme }) => theme.COLORS.GRAY_100};
   
   align-items: center;
   justify-content: center;

   padding: 16px;
   border-radius: 6px;

   margin-bottom: 12px;
`;

export const SecondContainer = styled.View<Props>`
   width: 156px;
   height: 128px;

   background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.LIGHT_GREEN : theme.COLORS.LIGHT_RED};
   
   align-items: center;
   justify-content: center;

   padding: 16px;
   border-radius: 6px;
`;

export const Title = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_700}; 
    `}   
`;

export const Subtitle = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_600};
    `}
`;
