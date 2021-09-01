import React, {Component, useState, useEffect} from 'react';
import { Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Feather,Fontisto,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'
import styles from './styles'
import {globalStyles,colors } from '../../styles'
import bdFunctions from '../../../bdFunctions'

const News = (props) =>
{

  const [menuactive, setMenuactive] = useState(1)

  function alteraMenu(menu){
    setMenuactive(menu);
  }

    return (
      <View style={styles.container}>
        <View style={styles.containerMenu}>
          <TouchableOpacity 
            style={styles.itemMenu}
            onPress={() => alteraMenu(1)}
          >
            <Text
              style={styles.textoItemMenu}
            >Games</Text>
              {menuactive === 1 ? (
                <View style={styles.destaqueMenuAtivo}/>
              ) : (
                <View style={styles.destaqueMenuInativo}/>
              )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemMenu}
            onPress={() => alteraMenu(2)}
          >
            <Text
              style={styles.textoItemMenu}
            >Music</Text>
            {menuactive === 2 ? (
                <View style={styles.destaqueMenuAtivo}/>
              ) : (
                <View style={styles.destaqueMenuInativo}/>
              )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemMenu}
            onPress={() => alteraMenu(3)}
          >
            <Text
              style={styles.textoItemMenu}
            >Movies</Text>
            {menuactive === 3 ? (
                <View style={styles.destaqueMenuAtivo}/>
              ) : (
                <View style={styles.destaqueMenuInativo}/>
              )}
          </TouchableOpacity>
        </View>
        <View style={styles.containerItens}>
          <TouchableOpacity style={styles.caixaItemPerfil}>
            <View style={styles.caixaItemPerfilCabecalho}>
              <Text 
                style={styles.caixaNewsCabecalhoTextoTit}
              >
                Blizzard
              </Text>              
              <Text 
                style={styles.caixaNewsCabecalhoTextoCorpo}
              >
                PRE-LOAD CRASH BANDICOOT™ 4 NOW!
              </Text>
            </View>
            <Image 
              style={styles.caixaNewsImagem}
              source={{uri:'https://bnetcmsus-a.akamaihd.net/cms/blog_header/WGH4Z78Y20SX1616110273103.jpg'}}/> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.caixaItemPerfil}>
            <View style={styles.caixaItemPerfilCabecalho}>
              <Text 
                style={styles.caixaNewsCabecalhoTextoTit}
              >
                X-Box
              </Text>              
              <Text 
                style={styles.caixaNewsCabecalhoTextoCorpo}
              >
                Xbox Game Pass Ultimate Includes Xbox Live Gold and over 100 high-quality console and PC games.
              </Text>
            </View>
            <Image 
              style={styles.caixaNewsImagem}
              source={{uri:'https://compass-ssl.xbox.com/assets/0b/99/0b996b82-a453-418c-8db3-e1fb33fb8654.jpg?n=XGP_Small-tout-1084_2-1-21_475x534.jpg'}}/> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.caixaItemPerfil}>
            <View style={styles.caixaItemPerfilCabecalho}>
              <Text 
                style={styles.caixaNewsCabecalhoTextoTit}
              >
                Playstation
              </Text>              
              <Text 
                style={styles.caixaNewsCabecalhoTextoCorpo}
              >
                Avengers is now avaible for PS5!
              </Text>
            </View>
            <Image 
              style={styles.caixaNewsImagem}
              source={{uri:'https://gmedia.playstation.com/is/image/SIEPDC/marvels-avengers-key-art-image-block-04-en-10aug20?$1600px$'}}/> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.caixaItemPerfil}>
            <View style={styles.caixaItemPerfilCabecalho}>
              <Text 
                style={styles.caixaNewsCabecalhoTextoTit}
              >
                Playstation
              </Text>              
              <Text 
                style={styles.caixaNewsCabecalhoTextoCorpo}
              >
                Play At Home returns with a free selection of great games and more, dropping over the coming months.
              </Text>
            </View>
            <Image 
              style={styles.caixaNewsImagem}
              source={{uri:'https://gmedia.playstation.com/is/image/SIEPDC/play-at-home-phase-1-keyart-01-en-22feb21?$1600px$'}}/> 
          </TouchableOpacity>
        </View>
      </View>
    );
}
  
export default News;