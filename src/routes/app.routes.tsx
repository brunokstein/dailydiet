import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from '@screens/Home';
import { Statics } from '@screens/Statics';
import { NewFood } from '@screens/NewFood';
import { Feedback } from '@screens/Feedback';
import { Food } from '@screens/Food';
import { EditFood } from '@screens/EditFood';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="statics"
                component={Statics}
            />

            <Screen
                name="newfood"
                component={NewFood}
            />

            <Screen
                name="feedback"
                component={Feedback}
            />

            <Screen
                name="food"
                component={Food}
            />

            <Screen
                name="editfood"
                component={EditFood}
            />

        </Navigator>
    );
}