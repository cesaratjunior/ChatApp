import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Router, Scene, Drawer} from 'react-native-router-flux';
import {Feather,Fontisto,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'
import { Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native';

import Home from './src/pages/Home';
import Chat from './src/pages/Chat';
import ChatChoice from './src/pages/ChatChoice';
import ChatAdd from './src/pages/ChatAdd';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Profile from './src/pages/Profile';
import Contacts from './src/pages/Contacts';
import Settings from './src/pages/Settings';
import News from './src/pages/News';

export default function App() {

  const InboxIcon = () => {
    return (
        <View style={{ marginRight: 10 }} >
            <Feather
              name='edit-3' 
              size={36} 
              color={'black'}
            />
        </View>
    );
  };


  return (
   <Router>
     <Scene key='root'>
       <Scene key='Login' title='Login' component={Login} hideNavBar={true}></Scene>
       <Scene key='Register' title='Register' component={Register} ></Scene>
       <Scene key='Home' title='Home' component={Home} hideNavBar={true}></Scene>        
        <Scene key='Chat' title='Chat' component={Chat}></Scene>
        <Scene key='ChatChoice' title='ChatChoice' component={ChatChoice}></Scene>
        <Scene key='ChatAdd' title='Chats' component={ChatAdd}></Scene>
        <Scene key='Profile' title='Profile' component={Profile} renderRightButton={InboxIcon}></Scene> 
        <Scene key='Contacts' title='Contacts' component={Contacts}></Scene> 
        <Scene key='Settings' title='Settings' component={Settings}></Scene> 
        <Scene key='News' title='News' component={News}></Scene> 
     </Scene>
   </Router> 
  );
}

