import {StyleSheet} from 'react-native'
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'flex-start',
        justifyContent:'flex-start',
        backgroundColor: colors.white,
        height: metrics.screenHeight,
        width:metrics.screenWidth
      },
    containerHearder:{
       flexDirection:'row',
       backgroundColor: colors.primaryLight,
       height: metrics.screenHeight*0.1,
       width: metrics.screenWidth
    },
    headerText:{
        width:'100%',
        fontSize:24,
        color:colors.white,
        textAlign:'center'
    },
    containerWelcome:{
        marginTop: 40,
        // marginLeft: 25,
        backgroundColor: colors.primaryLight,
        height: '50%',
        width: metrics.screenWidth*0.73
    },
    containerImg:{
        marginTop:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: colors.white,
        height:metrics.screenHeight*0.25,
        width: metrics.screenWidth
    },
    logo:{
        width: 225,
        height: 250
    },
    containerButons:
    {
        marginTop:60,
        backgroundColor:colors.white,
        height:metrics.screenHeight*0.2,        
        width: metrics.screenWidth,
        flexDirection: 'row'
    },
    optionButons:
    {
        marginLeft:30,
        flexDirection:'column',
        backgroundColor:colors.primary,
        height:175,        
        width:175,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:5,
        shadowColor:'#000',
        shadowOffset:{
            width:2,
            height:5
        },
        shadowOpacity:0.5,
        shadowRadius:3.84,
        elevation:5
    },
    iconButons:
    {
        marginLeft:45
    },
    textButons:
    {
        textAlign:'center',
        color: colors.white,
        fontSize: 30
    },
    textImg:{
        fontSize:50,
        color:colors.primaryLight,
        marginBottom: 20
    },
    menuIcon:{        
        marginTop:35,
        marginLeft:8,
        width: 55,
        height: 55,
    }, 
    logoffIcon:{        
        marginTop:35,
        // marginLeft:8,
        marginRight:2,
        width: 55,
        height: 55,
    },     
    input:{
        marginTop:10,
        borderWidth:1,
        borderColor:'black',
        padding:5
    },
    btn:{
        marginTop:10,
        fontSize:20
    },    
    containerModal:{
        flex:1,
        flexDirection:'row',
        alignContent:'flex-start',
        justifyContent:'flex-start',
        height: metrics.screenHeight,
        width:metrics.screenWidth
    },
    containerModalTransp:{
        flex:1,
        alignContent:'flex-start',
        justifyContent:'flex-start',
        backgroundColor: colors.black,
        height: metrics.screenHeight,
        width:metrics.screenWidth*0.5,
        opacity: 0.5
    },
    containerModalSideMenu:{
        flex:1,
        alignContent:'flex-start',
        justifyContent:'flex-start',
        backgroundColor: colors.primaryLight,
        height: metrics.screenHeight,
        width:metrics.screenWidth*0.5,
    },
    containerModalImg:{
        justifyContent:'flex-start',
        alignItems:'center',
        height: metrics.screenHeight*0.22,
      },
    ModalImagemPerfil:{
        width:metrics.screenWidth*0.4,
        height:metrics.screenHeight*0.2,      
        borderColor: colors.white,
        borderWidth:1.5,
        borderRadius:400,
        marginTop: metrics.screenHeight*0.01, 
    },
    containerModalUsername:{
        width:metrics.screenWidth*0.5,
        height:metrics.screenHeight*0.03,      
    },
    ModalUsername:{
        textAlign:'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.white,
    },
    ModalMenuIcon:{     
        marginLeft:4,
        backgroundColor:colors.white,        
        alignItems:'center',
        borderWidth:0.5,
        borderRadius:400,
        borderColor: colors.white,
        width:metrics.screenWidth*0.12,
        height: metrics.screenHeight*0.06, 
    },
    containerModalLine:{
      alignItems:'center',
      justifyContent:'center',
      width:metrics.screenWidth*0.5,
      height: metrics.screenHeight*0.02, 
    },
    ModalLine:{
        borderBottomWidth: 1,
        borderBottomColor: colors.white,  
        width:metrics.screenWidth*0.4,
    },
    containerMenuGroups:{
        flex:1,
        flexDirection:'column',
        alignContent:'flex-start',
        justifyContent:'flex-start',
        height: metrics.screenHeight,
        width:metrics.screenWidth*0.5
    },
    itemMenuGroups:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'flex-start',
        height:metrics.screenHeight*0.06,
        marginLeft: metrics.screenWidth*0.04,
    },
    itemMenuGroupsText:{
        textAlign:'center',
        marginTop:metrics.screenHeight*0.01,
        marginLeft:metrics.screenWidth*0.04,
        height:metrics.screenHeight*0.06,
        fontSize: 24,
        color: colors.white,
    }
})

export default styles;