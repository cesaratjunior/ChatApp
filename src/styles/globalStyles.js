import { StyleSheet } from 'react-native';
import { colors, metrics } from '.';

const globalStyles = StyleSheet.create({
    container:{
      flex:1,
      alignContent:'center',
      justifyContent:'center',
      backgroundColor: colors.primaryLight,
      height: metrics.screenHeight,
      width:metrics.screenWidth
    },
    containerInputLogin:{
      alignItems:'center',
      justifyContent:'center',
      width: metrics.screenWidth
    },    
    input:{
      padding: 10,
      borderColor: colors.black,
      width: metrics.screenWidth*0.8,
      marginBottom:10,
      borderRadius:5,
      borderBottomWidth:1,
      color: colors.white,
      fontSize: 20
    },
    btn:{
        marginTop:10,
        fontSize:20
    }
});

export default globalStyles;
