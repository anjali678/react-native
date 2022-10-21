import React from 'react';
import { SafeAreaView, View, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const SidebarMenu = (props) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {/*Top Large Image */}
            <Image
                style={{ width: 90, height: 50, alignSelf: 'center', marginTop: 20 }}
                source={require('../assets/Logo_white.png')}
                resizeMode='contain'
            />
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                {/*<DrawerItem*/}
                {/*    label="Visit Us"*/}
                {/*    onPress={() => Linking.openURL('https://aboutreact.com/')}*/}
                {/*/>*/}
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default SidebarMenu;
