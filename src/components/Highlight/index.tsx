import { Container, Title, Subtitle, InsideButton, InsideIcon, BackgroundColorIconProps, BackgroundColorTypeProps } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
    title: string;
    subtitle: string;
    type?: BackgroundColorTypeProps;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    iconType: BackgroundColorIconProps;
    onNavigate: () => void;
}

export function Highlight({ title, subtitle, type = "PRIMARY", onNavigate, icon, iconType }: Props) {
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

            <InsideButton onPress={onNavigate}>
                <InsideIcon 
                    name={icon}
                    iconType={iconType}
                />
            </InsideButton>

        </Container>
    );
}