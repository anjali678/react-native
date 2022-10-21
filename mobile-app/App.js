import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import Router from './router'

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Router />
            </NavigationContainer>
        </PaperProvider>
    );
}
