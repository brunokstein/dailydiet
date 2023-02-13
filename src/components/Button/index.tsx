import { Loading } from '@components/Loading';
import { Feather } from '@expo/vector-icons';
import { Container, Title, Icon, ButtonBackgroundColorStyleProps, ButtonTextColorProps, ButtonIconColorProps } from './styles';

type Props = {
    title: string;
    type?: ButtonBackgroundColorStyleProps;
    textColor?: ButtonTextColorProps;
    icon?: keyof typeof Feather.glyphMap;
    iconType?: ButtonIconColorProps;
    showIcon?: boolean;
    isUpdating?: boolean;
    onNavigate: () => void;
}

export function Button({ title, isUpdating, type = "PRIMARY", textColor = "WHITESTYLE", icon, iconType, showIcon = false, onNavigate }: Props) {
    return (
        <Container
            type={type}
            onPress={onNavigate}
        >
            {
                showIcon &&
                <Icon
                    name={icon}
                    type={iconType}
                />
            }
            {
                isUpdating ? <Loading /> :

                    <Title
                        type={textColor}
                    >
                        {title}
                    </Title>
            }

        </Container>
    );
}

//FEATHER: edit-3, plus, trash-2
