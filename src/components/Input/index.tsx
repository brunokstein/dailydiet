import { TextInputProps, TextInput } from 'react-native';
import { TextInputTypeStyleProps, Title, InputContainer, Container } from './styles';

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>;
    type?: TextInputTypeStyleProps;
    title: string;
}

export function Input({ inputRef, type = "PRIMARY", title, ...rest }: Props) {
    return (
        <Container>
            <Title>{title}</Title>
            <InputContainer
                ref={inputRef}
                type={type}
                {...rest}
            />
        </Container>
    );
}