
import * as React from 'react'
import { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

interface Props {

}

interface State {

}

export default class App extends Component<Props, State> {
    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Hello worlds
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'mediumaquamarine',
    } as React.ViewStyle,

    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'darkorchid',
    } as React.TextStyle,
})