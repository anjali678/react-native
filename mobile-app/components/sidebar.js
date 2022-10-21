import {StyleSheet, Image} from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import React from "react";

import SidebarMenu from './sidebar-menu';
import AppointmentList from "../src/appointments/appointment-list";
import Dashboard from "../src/dashboard";

const Drawer = createDrawerNavigator();
export default function Sidebar() {
    return (
        <Drawer.Navigator
            initialRouteName="Dashboard"
            drawerContent={ props => <SidebarMenu {...props} /> }
            screenOptions={{
                headerShown: true,
                ImageHeader:()=>(<Image
                    style={{ width: 200, height: 50 }}
                    source={require('../assets/favicon.png')}
                    resizeMode='contain'
                />),
                overlayColor: 'transparent',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#fff',
                drawerStyle: { backgroundColor: '#6558F5', paddingTop: 20 },
                headerStyle: { backgroundColor: '#6558F5' },
                headerTintColor: '#fff',
                // headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Drawer.Group>
                <Drawer.Screen name="Dashboard" component={Dashboard} />
                <Drawer.Screen name="Appointments" component={AppointmentList} />
            </Drawer.Group>
        </Drawer.Navigator>
    );
}

