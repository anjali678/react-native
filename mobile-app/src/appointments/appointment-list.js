import React from "react";
import { View } from 'react-native';
import { Button, Card, Title, TextInput, Text, DataTable, Searchbar } from 'react-native-paper';


const optionsPerPage = [2, 3, 4];
export default function AppointmentList({navigation}) {
    const [text, setText] = React.useState("");
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);
    const goToCreate = () => {
        navigation.navigate('Test',  { itemId: 86, otherParam: 'anything you want here' })
    }
    const goTopage = () => {
        navigation.navigate('TestApi')
    }

    return (
        <View style={{margin: 10}}>
            <Card style={{marginBottom: 10}}>
                <Card.Title title="Filters" icon="camera"/>
                <Card.Content>
                    <Text style={{marginBottom: 5}}>Clinician</Text>
                    {/*<TextInput*/}
                    {/*    style={{height: 40, width: 200}}*/}
                    {/*    mode="outlined"*/}
                    {/*    value={text}*/}
                    {/*    placeholder="clinician"*/}
                    {/*    onChangeText={text => setText(text)}*/}
                    {/*/>*/}
                    <Searchbar
                        placeholder="clinician"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                </Card.Content>
                <Card.Actions style={{alignSelf: 'flex-end'}}>
                    <Button>Clear</Button>
                </Card.Actions>
            </Card>

            <Card>
                <Card.Title title="Appointments" />
                <View>
                    <Button icon="plus" mode="contained" onPress={goToCreate}
                    style={{marginHorizontal: 15}}>
                        Create Appointments
                    </Button>
                    <Button mode="contained" onPress={goTopage}
                            style={{marginHorizontal: 15, marginTop: 20}}>
                        Test api
                    </Button>
                </View>
                <View>
                    <View style={{backgroundColor: '#f0f0f178', marginHorizontal: 15, marginTop: 15, padding: 15}}>
                        <Text>Dessert</Text>
                        <Text>Frozen yogurt</Text>
                    </View>
                </View>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Dessert</DataTable.Title>
                        <DataTable.Title numeric>Calories</DataTable.Title>
                        <DataTable.Title numeric>Fat</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                        <DataTable.Cell numeric>159</DataTable.Cell>
                        <DataTable.Cell numeric>6.0</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                        <DataTable.Cell numeric>237</DataTable.Cell>
                        <DataTable.Cell numeric>8.0</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Pagination
                        page={page}
                        numberOfPages={3}
                        onPageChange={(page) => setPage(page)}
                        label="1-2 of 6"
                        optionsPerPage={optionsPerPage}
                        itemsPerPage={itemsPerPage}
                        setItemsPerPage={setItemsPerPage}
                        showFastPagination
                        optionsLabel={'Rows per page'}
                    />
                </DataTable>
            </Card>
        </View>
    );
}

// const styles = StyleSheet.create({
//     h1: {
//         fontSize: 25,
//         fontWeight: '800'
//         // justifyContent: 'center',
//     },
//
//     h5: {
//         fontSize: 15,
//         fontWeight: 'bold',
//         marginBottom: 10
//         // justifyContent: 'center',
//     },
//
//     card: {
//         backgroundColor: '#FFFFFF',
//         padding: 20,
//         margin: 20,
//         marginBottom: 0
//     },
//
//     input: {
//         marginTop: 30,
//         width: 150,
//         height: 38,
//         borderWidth: 1,
//         padding: 10,
//         borderColor: '#C6C6C6',
//         borderRadius: 8,
//         marginLeft: -55,
//     },
//
//     body: {
//         backgroundColor: 'transparent',
//     },
// });