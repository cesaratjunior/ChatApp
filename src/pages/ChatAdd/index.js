import React, {Component, useEffect, useState} from 'react'
import {View, Text, LogBox, YellowBox} from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat'
import bdFunctions from '../../../bdFunctions'

const ChatAdd = (props) =>
{
    const {user} = props.navigation.state.params;
    const [userlist, setUserlist] = useState([]);

    useEffect(() => {
        LogBox.ignoreAllLogs();
        loadUser();        
    },[])   

    async function loadUser()
    {
        const list = await bdFunctions.findUser()
        console.log('lista')
        console.log(list)
    }

    return (
        <View>
            <Text>ChatAdd</Text>
        </View>
    );
}


export default ChatAdd;