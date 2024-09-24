import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegistrationScreen = ({ navigation }) => {
  return (
    <View>
       <Text>Register Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}

export default RegistrationScreen

const styles = StyleSheet.create({})