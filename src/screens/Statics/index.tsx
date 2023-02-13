import { Container, Body, SecondContainer, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

import { StaticsHeader } from '@components/StaticsHeader';
import { StaticCard } from '@components/StaticCard';

export function Statics() {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <StaticsHeader
                title="90,86%"
                subtitle="das refeições dentro da dieta"
                onBack={handleGoBack}
                icon="arrow-left"
                iconType="PRIMARY"
            />
            <Body>
                <Title>Estatísticas gerais</Title>
                <StaticCard
                    boxSize="LARGE"
                    title="22"
                    subtitle="melhor sequência de pratos dentro da dieta"
                />
                <StaticCard
                    boxSize="LARGE"
                    title="109"
                    subtitle="refeições registradas"
                />
                <SecondContainer>
                    <StaticCard
                        boxSize="SMALL"
                        title="99"
                        subtitle="refeições dentro da dieta"
                    />
                    <StaticCard
                        boxSize="SMALL"
                        title="10"
                        subtitle="refeições fora da dieta"
                        type="SECONDARY"
                    />
                </SecondContainer>

            </Body>
        </Container>
    )
}

