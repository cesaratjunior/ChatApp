import React, {Component, useState, useEffect} from 'react';
import { Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Feather} from '@expo/vector-icons'
import styles from './styles'
import {globalStyles,colors } from '../../styles'
import bdFunctions from '../../../bdFunctions'

const Register = (props) =>
{

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(''); //'https://apkvision.com/wp-content/uploads/2019/07/Naruto-Senki-140x140.jpg'

  async function Register(){  
    //Busca usuario no banco
    const user = await bdFunctions.findUserByName(name)
    console.log(user)
    if(user === null){
      //Cria usuario caso não exista
      const newUser ={
        _id: new Date().getTime(),
        name: name,
        password: password,
        avatar: avatar    
      }
      console.log(newUser)
      await bdFunctions.createUser(newUser)
      Alert.alert("Sucesso!", 'Usuário foi criado.');
      Actions.Login();
    }
    else{
      Alert.alert("Atenção!", 'Usuário já esta em uso.');
    }

  }

    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.containerInputLogin}>
          <TextInput
            style={globalStyles.input}
            value={name}
            onChangeText={setName}
            placeholder="Username or E-mail"
            placeholderTextColor={colors.white}
            keyboardType='default'
          />
        </View>
        <View style={globalStyles.containerInputLogin}>
          <TextInput
            style={globalStyles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor={colors.white}
            keyboardType='default'
            secureTextEntry={true}            
          />
        </View>
        <View style={globalStyles.containerInputLogin}>
          <TextInput
            style={globalStyles.input}
            value={avatar}
            onChangeText={setAvatar}
            placeholder="Avatar URL"
            placeholderTextColor={colors.white}
            keyboardType='default'
          />
        </View>
        <View style={styles.containerBtnLogin}>
          <TouchableOpacity style={styles.btn} onPress={Register}>
            <Text style={styles.btnText}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
  
export default Register;