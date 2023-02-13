import { FirstContainer, SecondContainer, Title, Subtitle, StaticCardTypeProps } from './styles';

export type BoxSizeProps = "LARGE" | "SMALL"

type Props = {
    title: string;
    subtitle: string;
    type?: StaticCardTypeProps;
    boxSize: BoxSizeProps;
}

export function StaticCard({ title, subtitle, type = "PRIMARY", boxSize }: Props) {
    
    if (boxSize === "LARGE") {
        return (
            <FirstContainer>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </FirstContainer>
        );
    }

    return (
        <SecondContainer
            type={type}
        >
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </SecondContainer>
    );
}