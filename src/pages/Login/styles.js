import {StyleSheet} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import {globalStyles,colors,metrics } from '../../styles'

const styles = StyleSheet.create({
    containerImg:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: colors.primaryLight,
      height:metrics.screenHeight*0.5
    },
    containerLblLogin:{
      alignItems:'flex-start',
      justifyContent:'center',
      backgroundColor: colors.primaryLight,
      width:metrics.screenWidth,
    },
    containerInputLogin:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:colors.primaryLight,
      width:metrics.screenWidth,
    },
    containerBtnLogin:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: colors.primaryLight,
      width:metrics.screenWidth,
      marginTop:20,  
    },
    title:{
      fontSize:50,
      color:colors.white,
    },
    logo:{
      width:metrics.screenWidth,
      height:metrics.screenHeight
    },
    btn:{
      width:metrics.screenWidth*0.4,
      height:metrics.screenHeight*0.05,
      backgroundColor: colors.darker,
      borderColor: colors.white,
      borderWidth:1.5,
      borderRadius:10,
    },
    btnText:{
      color: colors.white,
      alignSelf:'center',
      marginTop:5,
      fontSize:25
    },
    btnTextForget:{
      color: colors.white,
      alignSelf:'center',
      marginTop:15,
      fontSize:18
    },
    btnTextRegister:{
      color: colors.white,
      alignSelf:'center',
      marginTop:15,
      fontSize:26
    },
    btnHelp:{
      width:metrics.screenWidth*0.3,
      height:metrics.screenHeight*0.05,
    },
    containerHelp:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:metrics.screenWidth,
      marginTop:40,  
    },
    btnTextHelp:{
      color: colors.white,
      alignSelf:'center',
      marginTop:15,
      fontSize:15
    }
})

export default styles;