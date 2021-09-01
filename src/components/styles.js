import {StyleSheet} from 'react-native'
import { colors, metrics } from '../styles';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'flex-start',
        justifyContent:'flex-start',
        backgroundColor: colors.white,
        height: metrics.screenHeight,
        width:metrics.screenWidth*0.5
      },
})

export default styles;