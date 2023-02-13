import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Body, SecondContainer } from './styles';

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { TitleText } from "@components/TitleText";
import { ButtonDiet } from "@components/ButtonDiet";

export function EditFood() {

    const [goodDiet, setGoodDiet] = useState(false);
    const [badDiet, setBadDiet] = useState(false);

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    function handleSaveChanges() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <Header
                title="Editar refeição"
                backgroundColorStyle="GRAYSTYLE"
                icon="arrow-left"
                goBack={handleGoBack}
            />
            <Body>
                <Input title="Nome" />
                <Input title="Descrição" type="SECONDARY" multiline={true} textAlignVertical="top" />

                <SecondContainer>
                    <Input title="Data" />
                    <Input title="Hora" />
                </SecondContainer>

                <TitleText title="Está dentro da dieta?" />

                <SecondContainer>
                    <ButtonDiet
                        title="Sim"
                        icon="circle"
                        type="GOOD"
                        isActive={goodDiet}
                        onPress={() => { setGoodDiet(true), setBadDiet(false) }}
                    />
                    <ButtonDiet
                        title="Não"
                        icon="circle"
                        iconType="SECONDARY"
                        type="BAD"
                        isActive={badDiet}
                        onPress={() => { setBadDiet(true), setGoodDiet(false) }}
                    />
                </SecondContainer>

                <Button
                    title="Salvar alterações"
                    onNavigate={handleSaveChanges}
                    type="PRIMARY"
                    showIcon={false}
                />

            </Body>
        </Container>
    );
}