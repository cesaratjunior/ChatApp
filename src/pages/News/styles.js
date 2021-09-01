import {StyleSheet} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import {globalStyles,colors,metrics } from '../../styles'

const styles = StyleSheet.create({
    container:{
      backgroundColor: colors.primary,
    },
    containerMenu:{
      flexDirection:'row',
      backgroundColor: colors.white,
      height: metrics.screenHeight*0.05,
      width:metrics.screenWidth,
    },    
    itemMenu:{
      justifyContent:'center',
      width:metrics.screenWidth/3,
    },    
    containerItens:{
      alignItems:'center',
      backgroundColor: colors.white,
    },
    textoItemMenu:{
      textAlign:'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.secundary,
      marginTop:metrics.screenHeight*0.01,
    },
    destaqueMenuAtivo:{
      height: 10,
      backgroundColor:colors.secundary,
      marginTop:metrics.screenHeight*0.01,
    },
    destaqueMenuInativo:{
      backgroundColor:colors.terciary,
      height: 10,
      marginTop:metrics.screenHeight*0.01,
    },
    caixaItemPerfil:{
      
      flexDirection:'row',
      marginTop:20,
      width:metrics.screenWidth*0.90,
      height:metrics.screenHeight*0.15,
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
    caixaItemPerfilCabecalho:{
      flexDirection:'column',
    },
    caixaNewsImagem:{
      width:metrics.screenWidth*0.2,
      height:metrics.screenHeight*0.12,      
      borderColor: colors.black,
      borderWidth:0.5,
      borderRadius:20,
      marginTop:metrics.screenHeight*0.01
    },
    caixaNewsCabecalhoTextoTit:{
      width:metrics.screenWidth*0.65,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 5,
      marginLeft: metrics.screenWidth*0.02
    },
    caixaNewsCabecalhoTextoCorpo:{
      width:metrics.screenWidth*0.60,      
      height:metrics.screenHeight*0.08, 
      fontSize: 16,
      color: 'black',
      backgroundColor: 'white',
      marginTop:metrics.screenHeight*0.02,
      marginLeft: metrics.screenWidth*0.02, 
      borderRadius:20,
      textAlign:'center'
    },
    caixaItemPerfilConteudo:{
      flexDirection:'row',
      height:'50%',
    },
    caixaItemPerfilConteudoTexto:{
      width:'100%',
      textAlign:'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 5
    },
    containerButons:
    {
        marginTop:20,      
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    optionButons:
    {
        width:'40%',        
        flexDirection:'column',
        backgroundColor:colors.primary,
        alignContent:'center',
        justifyContent:'center',
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
    iconButons:
    {
        alignSelf:'center'
    },
    textButons:
    {
        textAlign:'center',
        color: colors.white,
        fontSize: 20,
        marginTop:10
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
      marginBottom: 20
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