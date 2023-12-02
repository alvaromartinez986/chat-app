import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    messageBox:{
        backgroundColor: '#294C60',
        marginRight: 50,
        borderRadius: 5,
        padding: 10
    },
    name :{
        color: Colors.dark.tint,
        fontWeight: 'bold',
        marginBottom: 5
    },
    time: {
        color: 'gray',
        alignSelf:'flex-end'
    }
});

export default styles;