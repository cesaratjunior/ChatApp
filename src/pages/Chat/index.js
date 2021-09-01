import React, {Component, useEffect, useState} from 'react'
import {View, Text} from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat'
import bdFunctions from '../../../bdFunctions'

const Chat = (props) =>
{
    const {user} = props.navigation.state.params;
    const [messages, setMessages] = useState([]);
    

    useEffect(() => {
        console.disableYellowBox = true;
        bdFunctions.loadMessages((msg) => {
            setMessages((prevMsg) => GiftedChat.append(prevMsg, msg));
        });
    },[])   


     function onSendMessage(msg){
            msg.forEach((msgs) => { 
             const {text, user} = msgs; 
             const message = {text, user, createdAt: new Date().getTime()};  
             bdFunctions.createMessage(message);
         });
    }

    return (
        <GiftedChat
            user={user}
            messages={messages}
            onSend={onSendMessage}
            renderUsernameOnMessage={true}
        />
    );
}


export default Chat;