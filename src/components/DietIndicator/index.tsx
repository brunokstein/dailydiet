import { IconTypeProps, IndicatorTypeProps, Container, Title, Icon } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
    title: string;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    iconType?: IconTypeProps;
    indicatorType?: IndicatorTypeProps;
}

export function DietIndicator({ title, icon, iconType="PRIMARY", indicatorType="PRIMARY" }: Props) {
    return (
        <Container type={indicatorType}>
            <Icon name={icon} type={iconType} />
            <Title>{title}</Title>
        </Container>
    );
}