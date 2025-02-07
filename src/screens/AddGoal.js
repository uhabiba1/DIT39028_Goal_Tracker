import React from 'react';
import { View, StyleSheet } from 'react-native';
import GoalInput from '../components/GoalInput';

import { storeGoal } from '../utility/http';

const AddGoal = ({ navigation, onAddGoal }) => {

  // Function to handle the addition of a new goal
  function addGoalHandler(goalText) {
    storeGoal(goalText)             // Call the storeGoal function to add the goal to the backend
      .then((newGoal) => {
        onAddGoal(newGoal.text);  
        navigation.navigate('List of Goals');  // Navigate to the list of goals after adding
      })
      .catch(error => {
        console.error('Error adding goal:', error);  // Log any errors
      });
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />  {/* Pass the addGoalHandler to GoalInput component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    padding: 20,
    alignItems: 'center'
  },
});

export default AddGoal;
