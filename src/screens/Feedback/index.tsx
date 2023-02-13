import { Container, Image } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HeaderFeedback } from '@components/HeaderFeedback';
import badIllustration from '../../assets/IllustrationBad.png';
import goodIllustration from '../../assets/IllustrationGood.png';
import { Button } from '@components/Button';

type RouteParams = {
    goodDiet: boolean;
}

export function Feedback() {

    const navigation = useNavigation();
    const route = useRoute();

    function goHome() {
        navigation.navigate('home');
    }

    const { goodDiet } = route.params as RouteParams;


    if (goodDiet) {
        return (
            <Container>
                <HeaderFeedback
                    title="Continue assim!"
                    subtitle="Você continua dentro da dieta. Muito bem!"
                />
                <Image source={goodIllustration} resizeMode="contain" />
                <Button
                    title="Ir para a página inicial"
                    onNavigate={goHome}
                />
            </Container>
        );
    }

    return (
        <Container>
            <HeaderFeedback
                title="Que pena!"
                subtitle="Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"
                titleType="SECONDARY"
            />
            <Image source={badIllustration} resizeMode="contain" />
            <Button
                title="Ir para a página inicial"
                onNavigate={goHome}
            />
        </Container>
    );
}