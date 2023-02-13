import { TouchableOpacityProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FirstContainer, SecondContainer, Title, Icon, IconTypeProps, ButtonDietStyleProps } from './styles';

export type ButtonDietProps = "GOOD" | "BAD"

type Props = TouchableOpacityProps & ButtonDietStyleProps & {
    title: string;
    buttonIsPressed?: boolean;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    iconType?: IconTypeProps;
    type: ButtonDietProps;
}

export function ButtonDiet({ title, isActive = false, icon, iconType = "PRIMARY", type, ...rest }: Props) {
    if (type === "GOOD") {
        return (
            <FirstContainer
                isActive={isActive}
                {...rest}
            >
                <Icon
                    name={icon}
                    type={iconType}
                />
                <Title>{title}</Title>
            </FirstContainer>
        );
    }
    return (
        <SecondContainer
            isActive={isActive}
            {...rest}
        >
            <Icon
                name={icon}
                type={iconType}
            />
            <Title>{title}</Title>
        </SecondContainer>
    );
}