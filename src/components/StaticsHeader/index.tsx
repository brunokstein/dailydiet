import { Container, Title, Subtitle, BackButton, BackIcon, BackgroundColorIconProps, BackgroundColorTypeProps } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
    title: string;
    subtitle: string;
    type?: BackgroundColorTypeProps;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    iconType: BackgroundColorIconProps;
    onBack: () => void;
}

export function StaticsHeader({ title, subtitle, type = "PRIMARY", onBack, icon, iconType }: Props) {
    return (
        <Container
            type={type}
        >
            <Title>
                {title}
            </Title>

            <Subtitle>
                {subtitle}
            </Subtitle>

            <BackButton onPress={onBack}>
                <BackIcon 
                    name={icon}
                    iconType={iconType}
                />
            </BackButton>

        </Container>
    );
}