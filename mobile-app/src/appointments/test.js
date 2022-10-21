import React from "react";
import { View, Button, Text } from 'react-native';

export default function Test({route, navigation}) {
    const [name, setName] = React.useState("old name");
    const { itemId } = route.params;
    const { otherParam } = route.params;

    const changeName = () => {
        setName('new name')

    }

    return (
        <View style={{margin: 10}}>
            <Text>lll</Text>
            <Text>itemId: {itemId}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Text>{name}</Text>
            <Button title="change name" onPress={changeName}/>
        </View>
    );
}