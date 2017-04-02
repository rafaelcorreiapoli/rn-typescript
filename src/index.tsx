
import * as React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'
import Comp from './Comp'

interface Props {
  
}

interface State {
  
}

export default class App extends Component<Props, State> {
  myFunction(person: string, age: number) {
    console.log(person)
  }
  
  public render() {
    return (
      <View style={styles.container}>
        <Comp />
        <Button
          title='Press me'
          color='#FF0000'
          onPress={() => this.myFunction('Teste', 123)}
        />
        <Text style={styles.text}>
          
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