import styled, { css } from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type BackgroundColorTypeProps = "PRIMARY" | "SECONDARY"
export type BackgroundColorIconProps = "PRIMARY" | "SECONDARY"

type Props = {
    type: BackgroundColorTypeProps;
}

type IconProps = {
    iconType: BackgroundColorIconProps;
}

export const Container = styled.View<Props>`
    width: 100%;
    height: 102px;
    margin-top: 8px;

    background-color: ${({ type, theme }) => type === "PRIMARY" ? theme.COLORS.LIGHT_GREEN : theme.COLORS.LIGHT_RED};
    border-radius: 6px;

    justify-content: center;
    align-items: center;
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
        color: ${theme.COLORS.GRAY_400};
    `}
`;

export const InsideButton = styled.TouchableOpacity`
    position: absolute;
    z-index: 1;
    flex-direction: row;
    right: 8px;
    top: 8px;
`;

export const InsideIcon = styled(MaterialCommunityIcons).attrs<IconProps>(({ theme, iconType }) => ({
    size: 24,
    color: iconType === "PRIMARY" ? theme.COLORS.GREEN : theme.COLORS.RED
}))``;