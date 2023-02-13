import { TouchableOpacityProps } from 'react-native';
import { IconTypeProps, Container, Divider, Title, Time, Icon, SecondContainer } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
    title: string;
    time: string;
    icon: keyof typeof MaterialCommunityIcons.glyphMap
    type: IconTypeProps;
}

export function FoodCard({ time, title, icon, type, ...rest }: Props) {
    return (
        <Container {...rest}>
            <SecondContainer>
                <Time>{time}</Time>
                <Divider />
                <Title>{title}</Title>
            </SecondContainer>
            <Icon
                name={icon}
                type={type}
            />
        </Container>
    );
}