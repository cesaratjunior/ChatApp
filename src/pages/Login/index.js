import React, {Component, useState, useEffect} from 'react';
import { Text, TextInput, View, TouchableOpacity,Alert, Image } from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Feather} from '@expo/vector-icons'
import styles from './styles'
import {globalStyles,colors } from '../../styles'
import bdFunctions from '../../../bdFunctions'

const Login = (props) =>
{

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  async function Logar()
  {
    //Busca usuario no banco
    const user = await bdFunctions.findUserByName(name)
    if(user === null){
      Alert.alert('Falha!', 'O usuário informado não existe.')
    }
    else {
      Actions.Home({user});
    }
  }

  function abrirRegister(){       
    Actions.Register();
  }

  useEffect(() => {
    console.disableYellowBox = true;
  },[])  

  return (
    <View style={globalStyles.container}>
      <View style={styles.containerImg}> 
        <Image 
          style={styles.title}
          source={require( '../../images/Logo_Branco.png')}/>    
      </View>
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
      <View style={styles.containerBtnLogin}>
        <TouchableOpacity style={styles.btn} onPress={Logar}>
          <Text style={styles.btnText}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerBtnLogin}>
        <TouchableOpacity>
          <Text style={styles.btnTextForget}>
            Forget my username/password
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerBtnLogin}>
        <TouchableOpacity
          onPress={abrirRegister}>
          <Text style={styles.btnTextRegister}>
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerHelp}>
        <TouchableOpacity style={styles.btnHelp}>
          <Text style={styles.btnTextHelp}>
            Contact us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnHelp}>
          <Text style={styles.btnTextHelp}>
           Help
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
  
export default Login;