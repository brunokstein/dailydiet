import { useState } from 'react';
import { Alert, Keyboard, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Body, SecondContainer } from './styles';

import { foodAddByDate } from '@storage/foodAddByDate';
import { FoodByDateDTO } from 'src/dtos/FoodByDateDTO';
import { FoodDTO } from 'src/dtos/FoodDTO';
import { foodAdd } from '@storage/foodAdd';

import { Input } from '@components/Input';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { TitleText } from '@components/TitleText';
import { ButtonDiet } from '@components/ButtonDiet';

export function NewFood() {
    const [isLoading, setIsLoading] = useState(false);

    const [foodName, setFoodName] = useState('');
    const [foodDescription, setFoodDescription] = useState('');
    const [foodDate, setFoodDate] = useState('');
    const [foodHour, setFoodHour] = useState('');
    const [goodDiet, setGoodDiet] = useState(false);
    const [badDiet, setBadDiet] = useState(false);

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    async function handleAddFood() {

        if (!foodName && foodName === "") {
            Alert.alert('Preencher informações', 'Preencha o nome.');
            return;
        }
        if (!foodDescription && foodDescription === "") {
            Alert.alert('Preencher informações', 'Preencha a descrição.');
            return;
        }
        if (!foodDate && foodDate === "") {
            Alert.alert('Preencher informações', 'Preencha a data.');
            return;
        }
        if (!foodHour && foodHour === "") {
            Alert.alert('Preencher informações', 'Preencha o horário.');
            return
        }

        try {
            const newFood: FoodDTO = {
                id: new Date().getTime(),
                name: foodName,
                description: foodDescription,
                hour: foodHour,
                onGoodDiet: goodDiet,
                onBadDiet: badDiet
            }
            const newFoodByDate: FoodByDateDTO = {
                date: foodDate,
                food: [{
                    id: new Date().getTime(),
                    name: foodName,
                    description: foodDescription,
                    hour: foodHour,
                    onGoodDiet: goodDiet,
                    onBadDiet: badDiet
                }]
            }
            setIsLoading(true);
            await foodAdd(newFoodByDate, newFood);
            navigation.navigate('feedback', { goodDiet });
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
        Keyboard.dismiss();
    }

    return (
        <Container>
            <Header
                title="Nova refeição"
                backgroundColorStyle="GRAYSTYLE"
                icon="arrow-left"
                goBack={handleGoBack}
            />
            <Body>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input
                        title="Nome"
                        keyboardType='default'
                        key="name"
                        onChangeText={text => setFoodName(text)}
                    />
                    <Input
                        title="Descrição"
                        type="SECONDARY"
                        key="description"
                        multiline={true}
                        keyboardType='default'
                        textAlignVertical="top"
                        onChangeText={text => setFoodDescription(text)}
                    />

                    <SecondContainer>
                        <Input
                            title="Data"
                            keyboardType="default"
                            key="date"
                            placeholder="Ex: 07/10/2010"
                            onChangeText={text => setFoodDate(text)}
                        />
                        <Input
                            title="Hora"
                            keyboardType="default"
                            placeholder="Ex: 16:00"
                            onChangeText={text => setFoodHour(text)}
                        />
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
                </ScrollView>
                <Button
                    title="Cadastrar refeição"
                    onNavigate={handleAddFood}
                    type="PRIMARY"
                    showIcon={false}
                    isUpdating={isLoading}
                />
            </Body>
        </Container>
    )
}