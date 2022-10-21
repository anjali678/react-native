import React from "react";
import { View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import styles from '../assets/style/style'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export default function Dashboard() {
    return (
        <View style={{margin: 10}}>
            <Card style={styles.dashboard}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Title>Card title </Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
        </View>
    );
}


