import {StyleSheet} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import {globalStyles,colors,metrics } from '../../styles'

const styles = StyleSheet.create({  
    containerItens:{
      alignItems:'center',
      backgroundColor: colors.white,
      height: metrics.screenHeight,
    },
    caixaItem:{      
      flexDirection:'row',
      marginTop:20,
      width:metrics.screenWidth*0.90,
      height:metrics.screenHeight*0.20,
      backgroundColor: colors.primary,
      borderColor: colors.primary,
      borderWidth:1.5,
      borderRadius:10,
      borderRadius:20,
      shadowColor:'#000',
      shadowOffset:{
          width:100,
          height:100
      },
      shadowOpacity:1,
      shadowRadius:10,
      elevation:10
    },
    containerImg:{
      justifyContent:'center',      
      alignItems:'center',
      height:metrics.screenHeight*0.2,
      width:metrics.screenWidth*0.4,
    },
    containerItemTextos:{
      flexDirection:'column',
      justifyContent:'space-around',      
      alignItems:'center',
      width:metrics.screenWidth*0.4,
    },
    ItemTexto:{
      textAlign:'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.white,
    },
    containerItemIcons:{
      flexDirection:'column',
      justifyContent:'space-around',      
      alignItems:'center',
      width:metrics.screenWidth*0.2,
    },
})

export default styles;