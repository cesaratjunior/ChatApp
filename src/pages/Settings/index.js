import React, {Component, useState, useEffect} from 'react';
import { Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Feather,Fontisto,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'
import styles from './styles'
import {globalStyles,colors } from '../../styles'
import bdFunctions from '../../../bdFunctions'

const Settings = (props) =>
{

    return (
        <View style={styles.containerItens}>
          <View style={styles.caixaItem}>
            <View style={styles.containerImg}>
            <Feather 
                name='settings' 
                size={56} 
                color={colors.white}/>
            </View>
            <View style={styles.containerItemTextos}>
              <Text style={styles.ItemTexto}>General Settings</Text>
            </View>
          </View>
          <View style={styles.caixaItem}>
            <View style={styles.containerImg}>
            <Feather 
                name='lock' 
                size={56} 
                color={colors.white}/>
            </View>
            <View style={styles.containerItemTextos}>
              <Text style={styles.ItemTexto}>Privacy Settings</Text>
            </View>
          </View>
          <View style={styles.caixaItem}>
            <View style={styles.containerImg}>
            <Feather 
                name='bell' 
                size={56} 
                color={colors.white}/>
            </View>
            <View style={styles.containerItemTextos}>
              <Text style={styles.ItemTexto}>Notification Settings</Text>
            </View>
          </View>
          <View style={styles.caixaItem}>
            <View style={styles.containerImg}>
            <Feather 
                name='users' 
                size={56} 
                color={colors.white}/>
            </View>
            <View style={styles.containerItemTextos}>
              <Text style={styles.ItemTexto}>Accessibility</Text>
            </View>
          </View>
        </View>
    );
}
  
export default Settings;