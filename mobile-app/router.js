import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from  './src/appointments/test'
import TestApi from  './src/appointments/test-api'
import Sidebar from "./components/sidebar";

const Stack = createNativeStackNavigator();
function Router() {
    return (
        <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: '#6558F5' },
                headerTintColor: '#fff',
            }}
        >
            {/*  SideBar  */}
            <Stack.Screen options={{headerShown: false}} name="j" component={Sidebar} />
            {/*  Screen List  */}
            <Stack.Screen name="Test" component={Test} />
            <Stack.Screen name="TestApi" component={TestApi} />
        </Stack.Navigator>
    );
}
export default Router;
