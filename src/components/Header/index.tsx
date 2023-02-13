import { Container, BackButton, HeaderBackgroundColorProps, BackIcon, Title } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
    title: string;
    backgroundColorStyle: HeaderBackgroundColorProps;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    goBack: () => void;
}

export function Header({ title, backgroundColorStyle, icon, goBack }: Props) {
    return (
        <Container
            type={backgroundColorStyle}
        >
            <BackButton
                onPress={goBack}
            >
                <BackIcon
                    name={icon}
                />
            </BackButton>

            <Title>{title}</Title>
        </Container>
    );
}