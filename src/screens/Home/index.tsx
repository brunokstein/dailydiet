import { useState, useCallback } from 'react';
import { SectionList, Text, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { FoodByDateDTO } from 'src/dtos/FoodByDateDTO';
import { FoodDTO } from 'src/dtos/FoodDTO';

import { Container } from './styles';

import { HomeHeader } from '@components/HomeHeader';
import { Highlight } from '@components/Highlight';
import { TitleText } from '@components/TitleText';
import { Button } from '@components/Button';
import { FoodCard } from '@components/FoodCard';
import { Loading } from '@components/Loading';
//import { foodsGetAll } from '@storage/food/foodsGetAll';
import { foodsGet } from '@storage/foodsGet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListEmpty } from '@components/ListEmpty';
import { foodsGetAll } from '@storage/foodsGetAll';
import { foodsGetByDate } from '@storage/foodsGetByDate';

export function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [foodsByDate, setFoodsByDate] = useState<FoodByDateDTO[]>([]);
    const navigation = useNavigation();

    const DATA = [
        {
            date: "01.10.22",
            data: [
                {
                    id: "1",
                    time: "16:00",
                    name: "Pizza",
                    diet: true
                },
                {
                    id: "2",
                    time: "20:00",
                    name: "Frango",
                    diet: true
                },
                {
                    id: "3",
                    time: "18:00",
                    name: "Hamburguer",
                    diet: false
                },
                {
                    id: "4",
                    time: "17:00",
                    name: "Carne",
                    diet: false
                }
            ],
        },
        {
            date: "02.10.22",
            data: [
                {
                    id: "1",
                    time: "16:00",
                    name: "Pizza",
                    diet: true
                },
                {
                    id: "2",
                    time: "20:00",
                    name: "Frango",
                    diet: true
                },
                {
                    id: "3",
                    time: "18:00",
                    name: "Hamburguer",
                    diet: false
                },
                {
                    id: "4",
                    time: "17:00",
                    name: "Carne",
                    diet: false
                }
            ],
        },
    ]

    function handleStatics() {
        navigation.navigate('statics');
    }

    function handleNewFood() {
        navigation.navigate('newfood');
    }

    function handleFood() {
        navigation.navigate('food');
    }

    async function fetchFoodByDay() {
        try {
            setIsLoading(true);
            const data = await foodsGet();
            setFoodsByDate(data);

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    console.log(foodsByDate);

    useFocusEffect(useCallback(() => {
        fetchFoodByDay();
    }, []));

    return (
        <Container>
            <HomeHeader />
            <Highlight
                title="90,86%"
                subtitle="das refeições dentro da dieta"
                onNavigate={handleStatics}
                icon="arrow-top-right"
                iconType="PRIMARY"
            />
            <TitleText title="Refeições" />
            <Button
                showIcon
                title="Nova refeição"
                icon="plus"
                onNavigate={handleNewFood}
            />
            {
                isLoading ? <Loading />
                    :
                    <SectionList
                        sections={foodsByDate}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <FoodCard
                                icon="checkbox-blank-circle"
                                time={item.time}
                                title={item.name}
                                type={item.diet ? "PRIMARY" : "SECONDARY"}
                                onPress={handleFood}
                            />
                        )}
                        renderSectionHeader={({ section: { date } }) => (
                            <TitleText
                                title={date}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <ListEmpty
                                message="Não há comidas registradas ainda. Vamos adicionar uma comida?"
                            />
                        )}
                    />
            }
        </Container>
    );
}