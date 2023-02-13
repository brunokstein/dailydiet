import { Container, Title, Subtitle, TitleStyleProps } from './styles';

type Props = {
    title: string;
    subTitle: string;
    type?: TitleStyleProps;
}

export function FoodDetails({ title, subTitle, type = "PRIMARY" }: Props) {
    return (
        <Container>
            <Title type={type}>{title}</Title>
            <Subtitle>{subTitle}</Subtitle>
        </Container>
    );
}