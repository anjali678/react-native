import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function TestApi () {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [test, setTest] = useState('');
    const roomUrl = 'https://primed.whereby.com/c14292e0-804c-4ea5-9b7c-c4f39d157a37?roomKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb29tUmVmZXJlbmNlIjp7InJvb21OYW1lIjoiL2MxNDI5MmUwLTgwNGMtNGVhNS05YjdjLWM0ZjM5ZDE1N2EzNyIsIm9yZ2FuaXphdGlvbklkIjoiMTY0MTE1In0sImlzcyI6Imh0dHBzOi8vYWNjb3VudHMuc3J2LndoZXJlYnkuY29tIiwiaWF0IjoxNjYzOTQzNDIzLCJyb29tS2V5VHlwZSI6InZlcmlmaWVkVmlld2VyIn0.tnEQ9hvEOFlBIJnU1s8KqKFBj1zDmNn8Cw1Tll6tgxw'; // Replace by your own
    const roomParameters = '?needancestor&skipMediaPermissionPrompt';

    const getMovies = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    const testApi = async () => {
        try {
            const response = await fetch('https://33a9-112-134-119-53.ap.ngrok.io/api/admin/test-mobile');
            const json = await response.json();
            setTest(json.message);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
        testApi()
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <Text>dd: {test}</Text>
            <WebView style={{height: 1000}}
                startInLoadingState
                source={{ uri: roomUrl + roomParameters }}
                mediaPlaybackRequiresUserAction={false}

                // iOS specific:
                allowsInlineMediaPlayback

                // Android specific:
                javaScriptEnabled
                domStorageEnabled
            />
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.title}, {item.releaseYear}</Text>
                    )}
                />
            )}
        </View>
    );
};