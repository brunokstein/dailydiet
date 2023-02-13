import { Title, Subtitle, TitleStyleProps, SubtitleStyleProps, Container } from './styles';

type Props = {
    title: string;
    subtitle: string;
    titleType?: TitleStyleProps;
    subtitleType?: SubtitleStyleProps;
}

export function HeaderFeedback({ title, subtitle, titleType = "PRIMARY", subtitleType = "REGULAR" }: Props) {
    return (
        <Container>
            <Title type={titleType}>{title}</Title>
            <Subtitle type={subtitleType}>{subtitle}</Subtitle>
        </Container>
    )
}