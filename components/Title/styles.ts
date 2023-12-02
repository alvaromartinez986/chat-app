import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1

    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold', 
        color: Colors.light.background
    },
    buttonContainer: {
        marginRight: 30
    }
})


export  default styles;