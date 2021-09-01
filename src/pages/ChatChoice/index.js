import React, {Component, useEffect, useState} from 'react'
import {View, Text} from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat'
import bdFunctions from '../../../bdFunctions'

const ChatChoice = (props) =>
{
    const {user} = props.navigation.state.params;
    const [chats, setchats] = useState([]);
    
    buscaUsuarios 

    useEffect(() => {
        console.disableYellowBox = true;
    },[])   

    return (
        <View>
            <Text>Chat Choice</Text>
        </View>
    );
}


export default ChatChoice;