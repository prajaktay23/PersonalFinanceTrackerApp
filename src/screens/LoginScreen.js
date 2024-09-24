import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = ({ navigation }) => {
  return (
    <View>
     <Text>Login Screen</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})