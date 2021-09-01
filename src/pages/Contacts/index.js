import React, {Component, useState, useEffect} from 'react';
import { Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Feather,Fontisto,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'
import styles from './styles'
import {globalStyles,colors } from '../../styles'
import bdFunctions from '../../../bdFunctions'

const Contacts = (props) =>
{

    return (
        <View style={styles.containerItens}>
          <View style={styles.caixaItem}>
            <View style={styles.containerImg}>
                <Image 
                  style={styles.imagemPerfil}
                  source={{uri:'data:image/jpeg;base64,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'}}/>
            </View>
            <View style={styles.containerItemTextos}>
              <Text style={styles.ItemTexto}>Ozzy</Text>
              <Feather 
                name='home' 
                size={36} 
                color={colors.white}/>
              <Text style={styles.ItemTexto}>Death Valley</Text>
            </View>
            <View style={styles.containerItemIcons}>
            <Feather 
                name='chevrons-right' 
                size={48} 
                color={colors.white}/>
            <Feather 
                name='message-circle' 
                size={48} 
                color={colors.white}/>
            </View>
          </View>
          <View style={styles.caixaItem}>
            <View style={styles.containerImg}>
                <Image 
                  style={styles.imagemPerfil}
                  source={{uri:'data:image/jpeg;base64,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'}}/>
            </View>
            <View style={styles.containerItemTextos}>
              <Text style={styles.ItemTexto}>Rock</Text>
              <Feather 
                name='home' 
                size={36} 
                color={colors.white}/>
              <Text style={styles.ItemTexto}>Holywood</Text>
            </View>
            <View style={styles.containerItemIcons}>
            <Feather 
                name='chevrons-right' 
                size={48} 
                color={colors.white}/>
            <Feather 
                name='message-circle' 
                size={48} 
                color={colors.white}/>
            </View>
          </View>
          <View style={styles.caixaItem}>
            <View style={styles.containerImg}>
                <Image 
                  style={styles.imagemPerfil}
                  source={{uri:'https://img.estadao.com.br/thumbs/640/resources/jpg/7/6/1566336669167.jpg'}}/>
            </View>
            <View style={styles.containerItemTextos}>
              <Text style={styles.ItemTexto}>Neo</Text>
              <Feather 
                name='home' 
                size={36} 
                color={colors.white}/>
              <Text style={styles.ItemTexto}>Matrix</Text>
            </View>
            <View style={styles.containerItemIcons}>
            <Feather 
                name='chevrons-right' 
                size={48} 
                color={colors.white}/>
            <Feather 
                name='message-circle' 
                size={48} 
                color={colors.white}/>
            </View>
          </View>
          <View style={styles.caixaItem}>
            <View style={styles.containerImg}>
                <Image 
                  style={styles.imagemPerfil}
                  source={{uri:'https://conteudo.imguol.com.br/c/entretenimento/ff/2019/08/21/matrix-morpheus-intepretado-por-laurence-fishburne-1566429460223_v2_615x300.png'}}/>
            </View>
            <View style={styles.containerItemTextos}>
              <Text style={styles.ItemTexto}>Mofeu</Text>
              <Feather 
                name='home' 
                size={36} 
                color={colors.white}/>
              <Text style={styles.ItemTexto}>Matrix</Text>
            </View>
            <View style={styles.containerItemIcons}>
            <Feather 
                name='chevrons-right' 
                size={48} 
                color={colors.white}/>
            <Feather 
                name='message-circle' 
                size={48} 
                color={colors.white}/>
            </View>
          </View>
          <View style={styles.caixaItem}>
            <View style={styles.containerImg}>
                <Image 
                  style={styles.imagemPerfil}
                  source={{uri:'https://apkvision.com/wp-content/uploads/2019/07/Naruto-Senki-140x140.jpg'}}/>
            </View>
            <View style={styles.containerItemTextos}>
              <Text style={styles.ItemTexto}>Naruto</Text>
              <Feather 
                name='home' 
                size={36} 
                color={colors.white}/>
              <Text style={styles.ItemTexto}>Konoha</Text>
            </View>
            <View style={styles.containerItemIcons}>
            <Feather 
                name='chevrons-right' 
                size={48} 
                color={colors.white}/>
            <Feather 
                name='message-circle' 
                size={48} 
                color={colors.white}/>
            </View>
          </View>
        </View>
    );
}
  
export default Contacts;