import { useNavigation } from "@react-navigation/native";
import { Container, Body } from './styles';
import { View } from 'react-native';

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { FoodDetails } from "@components/FoodDetails";
import { DietIndicator } from "@components/DietIndicator";


export function Food() {

    const navigation = useNavigation();

    const isActive = true;

    function goBack() {
        navigation.goBack();
    }

    function handleEditFood() {
        navigation.navigate('editfood');
    }

    function handleRemoveFood() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <Header
                title="Refeição"
                backgroundColorStyle="GREENSTYLE"
                icon="arrow-left"
                goBack={goBack}
            />
            <Body>
                <FoodDetails
                    title="Sanduíche"
                    subTitle="Sanduíche de pão integral com atum e salada de alface e tomate"
                />
                <FoodDetails
                    type="SECONDARY"
                    title="Data e hora"
                    subTitle="12/02/2022 às 16:00"
                />
                {
                    isActive ?
                        <DietIndicator
                            icon="circle"
                            title="dentro da dieta"
                        />
                        :
                        <DietIndicator
                            indicatorType="SECONDARY"
                            icon="circle"
                            iconType="SECONDARY"
                            title="fora da dieta"
                        />
                }
                <View style={{ flex: 1 }}>
                </View>
                <Button
                    title="Editar refeição"
                    showIcon icon="edit-3"
                    iconType="LIGHTGRAYCOLOR"
                    onNavigate={handleEditFood}
                />
                <Button
                    title="Excluir refeição"
                    type="SECONDARY"
                    textColor="GRAYSTYLE"
                    showIcon icon="trash-2"
                    iconType="GRAYCOLOR"
                    onNavigate={handleRemoveFood}
                />
            </Body>
        </Container>
    )
}