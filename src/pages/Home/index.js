import React, {Component, useState} from 'react'
import {View, Text,TextInput,TouchableOpacity, Alert,Image,Modal} from 'react-native'
import {Actions} from 'react-native-router-flux'
import styles from './styles'
import bdFunctions from '../../../bdFunctions'
import {Feather} from '@expo/vector-icons'
import { colors, metrics } from '../../styles/';


const Home = (props) =>
{

    const {user} = props.navigation.state.params;  
    const [showMenu, setshowMenu] = useState(false);

    function openGroupChat(){  
        Actions.Chat({user});
    }

    function openProfile(){  
        Actions.Profile({user});
    }

    function openContacts(){  
        Actions.Contacts({user});
    }

    function openChatChoice(){      
        Actions.ChatAdd({user});
    }

    function logoff(){      
        Actions.Login();
    } 
    
    function openSettings(){  
        Actions.Settings({user});
    }

    function openNews(){  
        Actions.News({user});
    }


    

    return (
        <View style={styles.container}>
            <Modal
            animationType="fade"
            transparent={true}
            visible={showMenu}
            onRequestClose={() => {
            setshowMenu(!showMenu);
            }}>
                <View style={styles.containerModal}>
                    <View style={styles.containerModalSideMenu}>     
                        <TouchableOpacity 
                            style={styles.ModalMenuIcon}
                            onPress={() => {setshowMenu(false)}}>
                                <Feather 
                                    name='menu' 
                                    size={48} 
                                    color={colors.primary}/>
                        </TouchableOpacity>
                        <View style={styles.containerModalImg}>
                            <Image 
                            style={styles.ModalImagemPerfil}
                            source={{uri:'https://apkvision.com/wp-content/uploads/2019/07/Naruto-Senki-140x140.jpg'}}/>
                        </View>
                        <View style={styles.containerModalUsername}> 
                            <Text style={styles.ModalUsername}>{user.name}</Text>
                        </View>
                        <View style={styles.containerModalLine}> 
                            <View style={styles.ModalLine}/> 
                        </View>
                        <View style={styles.containerMenuGroups}>
                            <TouchableOpacity style={styles.itemMenuGroups}
                                onPress={() => {
                                    setshowMenu(false);
                                    openProfile();
                                    }}>
                                <Feather 
                                        name='user' 
                                        size={36} 
                                        color={colors.white}/>
                                <Text style={styles.itemMenuGroupsText}>Profile</Text>
                            </TouchableOpacity>                 
                            <TouchableOpacity style={styles.itemMenuGroups}
                                onPress={() => {
                                    setshowMenu(false);
                                    Alert.alert("Em construção");
                                    }}>
                                <Feather 
                                        name='share-2' 
                                        size={36} 
                                        color={colors.white}/>
                                <Text style={styles.itemMenuGroupsText}>Invite</Text>
                            </TouchableOpacity>    
                            <TouchableOpacity style={styles.itemMenuGroups}
                                onPress={() => {
                                    setshowMenu(false);
                                    openContacts();
                                    }}>
                                <Feather 
                                        name='users' 
                                        size={36} 
                                        color={colors.white}/>
                                <Text style={styles.itemMenuGroupsText}>Contacts</Text>
                            </TouchableOpacity>    
                            <TouchableOpacity style={styles.itemMenuGroups}
                                onPress={() => {
                                    setshowMenu(false);
                                    openSettings();
                                    }}>
                                <Feather 
                                        name='settings' 
                                        size={36} 
                                        color={colors.white}/>
                                <Text style={styles.itemMenuGroupsText}>Settings</Text>
                            </TouchableOpacity>    
                            <TouchableOpacity style={styles.itemMenuGroups}
                                onPress={() => {
                                    setshowMenu(false);
                                    Alert.alert("Em construção");
                                    }}>
                                <Feather 
                                        name='help-circle' 
                                        size={36} 
                                        color={colors.white}/>
                                <Text style={styles.itemMenuGroupsText}>Help</Text>
                            </TouchableOpacity>    
                            <TouchableOpacity style={styles.itemMenuGroups}
                                onPress={() => {
                                    setshowMenu(false);
                                    Alert.alert("Em construção");
                                    }}>
                                <Feather 
                                        name='phone-call' 
                                        size={36} 
                                        color={colors.white}/>
                                <Text style={styles.itemMenuGroupsText}>Contact us</Text>
                            </TouchableOpacity>    
                            {/* <TouchableOpacity style={styles.itemMenuGroups}></TouchableOpacity>
                                 onPress={() => {
                                     setshowMenu(false);
                                     openProfile();
                                     }
                                     }>
                                 <Feather 
                                         name='user' 
                                         size={48} 
                                         color={colors.white}/>
                                 <Text style={styles.itemMenuGroupsText}></Text>
                             </TouchableOpacity>     */}
                            <TouchableOpacity style={styles.itemMenuGroups}></TouchableOpacity>
                            <TouchableOpacity style={styles.itemMenuGroups}
                                onPress={() => {
                                    setshowMenu(false);
                                    logoff();
                                    }}>
                                <Feather 
                                        name='log-out' 
                                        size={36} 
                                        color={colors.white}/>
                                <Text style={styles.itemMenuGroupsText}>Log Out</Text>
                            </TouchableOpacity>    
                        </View>
                    </View>
                    <View style={styles.containerModalTransp}/>
                </View>               
            </Modal>
            <View style={styles.containerHearder}>
                <TouchableOpacity 
                    style={styles.menuIcon}
                    onPress={() => {setshowMenu(true)}}>
                        <Feather 
                            name='menu' 
                            size={48} 
                            color={'white'}/>
                </TouchableOpacity>
                <View style={styles.containerWelcome}>
                    <Text style={styles.headerText}>Welcome {user.name} have fun!</Text>
                </View>
                <View style={styles.containerLogout}>
                    <TouchableOpacity 
                        style={styles.logoffIcon}
                        onPress={logoff}>
                            <Feather 
                                name='log-out' 
                                size={48} 
                                color={'white'}/>
                    </TouchableOpacity> 
                </View>
            </View>
            <View style={styles.containerImg}> 
                <Image 
                    style={styles.logo}
                    source={require( '../../images/Logo.png')}/>    
            </View>
            <View style={styles.containerButons}>
                <TouchableOpacity 
                    style={styles.optionButons}
                    onPress={openGroupChat}>
                        <Feather name='message-square' size={90} color={'white'} style={styles.iconButons}/>
                        <Text style={styles.textButons}>Chat Rooms</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.optionButons}
                    onPress={openNews}>
                        <Feather name='book-open' size={90} color={'white'} style={styles.iconButons}/>
                        <Text style={styles.textButons}>News</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerButons}>
                <TouchableOpacity style={styles.optionButons}
                    onPress={() => {
                        Alert.alert('Aguarde...','Funcionalidade ainda não implementada')
                    }}>
                        <Feather name='message-circle' size={90} color={'white'} style={styles.iconButons}/>
                        <Text style={styles.textButons}>Messages</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButons}
                    onPress={() => {
                        Alert.alert('Aguarde...','Funcionalidade ainda não implementada')
                    }}>
                        <Feather name='command' size={90} color={'white'} style={styles.iconButons}/>
                        <Text style={styles.textButons}>Community</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Home;