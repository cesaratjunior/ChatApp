import React, {Component, useState, useEffect} from 'react';
import { Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Feather,Fontisto,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'
import styles from './styles'
import {globalStyles,colors } from '../../styles'
import bdFunctions from '../../../bdFunctions'

const Profile = (props) =>
{

  const [menuactive, setMenuactive] = useState(1)
  const [name, setName] = useState('');
  const [showEmail, setShowEmail] = useState(true);
  const [showName, setShowName] = useState(true)
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(''); //'https://apkvision.com/wp-content/uploads/2019/07/Naruto-Senki-140x140.jpg'

  async function Register(){  
    //Busca usuario no banco
    const user = await bdFunctions.findUserByName(name)
    
    console.log(user)

  }

  function alteraMenu(menu){
    setMenuactive(menu);
  }

    return (
      <View style={globalStyles.container}>
        <View style={styles.containerImg}>
            <Image 
              style={styles.imagemPerfil}
              source={{uri:'https://apkvision.com/wp-content/uploads/2019/07/Naruto-Senki-140x140.jpg'}}/>
        </View>
        <View style={styles.containerMenu}>
          <TouchableOpacity 
            style={styles.itemMenu}
            onPress={() => alteraMenu(1)}
          >
            <Text
              style={styles.textoItemMenu}
            >Personal Info</Text>
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
            >Interests</Text>
            {menuactive === 2 ? (
                <View style={styles.destaqueMenuAtivo}/>
              ) : (
                <View style={styles.destaqueMenuInativo}/>
              )}
          </TouchableOpacity>
        </View>
        <View style={styles.containerItens}>
          {menuactive === 1 ? (
                <>
                  <View style={styles.caixaItemPerfil}>
                    <View style={styles.caixaItemPerfilCabecalho}>
                      <Feather
                            style={styles.caixaItemPerfilCabecalhoIcone}
                            name='user' 
                            size={36} 
                            color={'white'}
                      />
                      <Text 
                            style={styles.caixaItemPerfilCabecalhoTexto}
                      >
                            Name
                      </Text>
                      <TouchableOpacity                        
                        style={styles.caixaItemPerfilCabecalhoIcone}
                        onPress={() => setShowName(!showName)}
                      >
                        <>
                        {showName ? 
                          (
                            <Feather
                                name='eye' 
                                size={36} 
                                color={'white'}
                            />
                          ) : (
                            <Feather
                              name='eye-off' 
                              size={36} 
                              color={'white'}
                            />
                        )}
                        </>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.caixaItemPerfilConteudo}>
                      <>
                        {showName ? 
                          (
                            <Text
                              style={styles.caixaItemPerfilConteudoTexto}
                            >
                              César Augusto Tavares Junior
                            </Text>
                          ) : (<></>
                        )}
                        </>
                    </View>
                  </View>
                  <View style={styles.caixaItemPerfil}>
                    <View style={styles.caixaItemPerfilCabecalho}>
                      <Feather
                            style={styles.caixaItemPerfilCabecalhoIcone}
                            name='smile' 
                            size={36} 
                            color={'white'}
                      />
                      <Text 
                            style={styles.caixaItemPerfilCabecalhoTexto}
                      >
                            Username
                      </Text>
                    </View>
                    <View style={styles.caixaItemPerfilConteudo}>
                      <Text
                        style={styles.caixaItemPerfilConteudoTexto}
                      >
                        Nome do usuário
                      </Text>
                    </View>
                  </View>
                  <View style={styles.caixaItemPerfil}>
                    <View style={styles.caixaItemPerfilCabecalho}>
                      <Feather
                            style={styles.caixaItemPerfilCabecalhoIcone}
                            name='mail' 
                            size={36} 
                            color={'white'}
                      />
                      <Text 
                            style={styles.caixaItemPerfilCabecalhoTexto}
                      >
                            E-mail
                      </Text>
                      <TouchableOpacity                        
                        style={styles.caixaItemPerfilCabecalhoIcone}
                        onPress={() => setShowEmail(!showEmail)}
                      >
                        <>
                        {showEmail ? 
                          (
                            <Feather
                                name='eye' 
                                size={36} 
                                color={'white'}
                            />
                          ) : (
                            <Feather
                              name='eye-off' 
                              size={36} 
                              color={'white'}
                            />
                        )}
                        </>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.caixaItemPerfilConteudo}>
                      <>
                        {showEmail ? 
                          (
                            <Text
                              style={styles.caixaItemPerfilConteudoTexto}
                            >
                              cesartavaresjunior@gmail.com
                            </Text>
                          ) : (<></>
                        )}
                        </>
                    </View>
                  </View>
                  <View style={styles.caixaItemPerfil}>
                    <View style={styles.caixaItemPerfilCabecalho}>
                      <Feather
                            style={styles.caixaItemPerfilCabecalhoIcone}
                            name='calendar' 
                            size={36} 
                            color={'white'}
                      />
                      <Text 
                            style={styles.caixaItemPerfilCabecalhoTexto}
                      >
                            Date of Birth
                      </Text>
                    </View>
                    <View style={styles.caixaItemPerfilConteudo}>
                      <Text
                        style={styles.caixaItemPerfilConteudoTexto}
                      >
                        06/12/1993
                      </Text>
                    </View>
                  </View>
                  <View style={styles.caixaItemPerfil}>
                    <View style={styles.caixaItemPerfilCabecalho}>
                      <Feather
                            style={styles.caixaItemPerfilCabecalhoIcone}
                            name='home' 
                            size={36} 
                            color={'white'}
                      />
                      <Text 
                            style={styles.caixaItemPerfilCabecalhoTexto}
                      >
                            Location
                      </Text>
                    </View>
                    <View style={styles.caixaItemPerfilConteudo}>
                      <Text
                        style={styles.caixaItemPerfilConteudoTexto}
                      >
                        Belo Horizonte
                      </Text>
                    </View>
                  </View>
                </>
              ) : (
                <>
                <View style={styles.containerButons}>
                  <View style={styles.optionButons}>
                        <MaterialCommunityIcons name='gamepad-variant-outline' size={90} color={'white'} style={styles.iconButons}/>
                        <Text style={styles.textButons}>Games</Text>
                  </View>
                  <View style={styles.optionButons}>
                        <Fontisto name='world-o' size={90} color={'white'} style={styles.iconButons}/>
                        <Text style={styles.textButons}>Travel</Text>
                  </View>
                </View>
                <View style={styles.containerButons}>
                <View style={styles.optionButons}>
                      <Feather name='book' size={90} color={'white'} style={styles.iconButons}/>
                      <Text style={styles.textButons}>Book</Text>
                </View>
                <View style={styles.optionButons}>
                      <MaterialIcons name='fitness-center' size={90} color={'white'} style={styles.iconButons}/>
                      <Text style={styles.textButons}>Gym</Text>
                </View>
              </View>
              <View style={styles.containerButons}>
                <View style={styles.optionButons}>
                      <Feather name='music' size={90} color={'white'} style={styles.iconButons}/>
                      <Text style={styles.textButons}>Music</Text>
                </View>
                <View style={styles.optionButons}>
                      <MaterialIcons name='local-movies' size={90} color={'white'} style={styles.iconButons}/>
                      <Text style={styles.textButons}>Movies</Text>
                </View>
              </View>
            </>
              )}
        </View>
      </View>
    );
}
  
export default Profile;