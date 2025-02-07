// component to handle user data input related functionality
import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native'; 

function GoalInput (props) {  // pass event handlers via props
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    // handle text input changes
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText)
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);       // forward 'enteredGoalText' manually
        setEnteredGoalText('');   // setting the text input back to empty string
    };

    return(
        <View style ={styles.inputContainer}>
            <TextInput 
                style = {styles.textInput} 
                placeholder='Your course goal!' 
                onChangeText={goalInputHandler}
                value={enteredGoalText} 
            />
            <Button title = 'Add Goal' onPress={addGoalHandler}/>  
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:  {
        flex: 1,
        flexDirection: 'row',  justifyContent: 'space-between',  alignItems: 'center',
        marginBottom: 10,      borderBottomWidth: 1,  borderBottomColor: '#cccccc' 
      },
    textInput: {
    width: '80%',    marginRight: 8,
    paddingLeft: 10, fontSize: 18
    }
});
