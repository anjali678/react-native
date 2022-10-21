import React from 'react';
import {Image, SafeAreaView, View, Dimensions} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph, TextInput, Checkbox,Text } from 'react-native-paper';

export default function Login() {
    const [text, setText] = React.useState("");
    const [checked, setChecked] = React.useState(false);
    const width = Dimensions.get('window').width;

    return (
        <View style={{flex: 1, margin: 20, justifyContent: 'center'}}>
            <Image
                style={{ width: 90, height: 50, alignSelf: 'center', marginTop: 20 }}
                source={require('../../assets/Logo_primary.png')}
                resizeMode='contain'
            />
            <Card>
                <Card.Content style={{margin: 8}}>
                    <Text style={{alignSelf: 'center', marginBottom: 25, fontSize: 18}}>Login to your account</Text>
                    <Paragraph style={{fontWeight: "bold"}}>Date of Birth</Paragraph>
                    <View style={{flexDirection: "row"}}>
                        <TextInput
                            style={{height: 40, width: 70, flexDirection: "column", marginRight: 10}}
                            mode="outlined"
                            value={text}
                            placeholder="date"
                            onChangeText={text => setText(text)}
                        />
                        <TextInput
                            style={{height: 40, width: 140, flexDirection: "column", marginRight: 10}}
                            mode="outlined"
                            value={text}
                            placeholder="month"
                            onChangeText={text => setText(text)}
                        />
                        <TextInput
                            style={{height: 40, width: 90, flexDirection: "column"}}
                            mode="outlined"
                            value={text}
                            placeholder="year"
                            onChangeText={text => setText(text)}
                        />
                    </View>
                    <View style={{flexDirection: "row", marginTop: 20, marginLeft: -10}}>
                        <Checkbox
                            style={{flexDirection: "column"}}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                        <Text style={{flexDirection: "column", marginTop: 8}}>Remember me on this device</Text>
                    </View>
                </Card.Content>

                <Card.Actions style={{alignSelf: 'center', marginBottom: 20, marginTop: 10}}>
                    <Button mode="contained" style={{width: width*.8}}>Login</Button>
                </Card.Actions>
            </Card>
        </View>
    )
}