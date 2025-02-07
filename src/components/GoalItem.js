// component to manage functionality to handle each single goal item 

import { StyleSheet, View, Text } from 'react-native'; 

function GoalItem (props) {  // utilizing props to pass item data
    return(
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 4,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
        fontSize: 18
    }
});