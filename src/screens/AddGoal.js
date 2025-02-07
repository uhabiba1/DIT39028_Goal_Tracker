import React from 'react';
import { View, StyleSheet } from 'react-native';
import GoalInput from '../components/GoalInput';

const AddGoal = ({ navigation, onAddGoal }) => {
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={(goalText) => {
        onAddGoal(goalText);
        navigation.navigate('List of Goals'); // Navigate to AllGoals after adding a goal
      }} />
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
