import React from 'react';
import { View, Text } from 'react-native';


const CardSection = (props) => {

    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>

    );
}

const styles = {
    containerStyle: {
        // borderBottomWidth: 0,
        borderWidth: 3,
        borderColor: '#FFFFFF',
        // elevation: 5,
        borderRadius: 12,
        backgroundColor: "#FFFFFF",
        height: 90,
        width: "90%",
        marginLeft:'auto',
        marginRight:'auto'
    }

};


export default CardSection;