import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GoalItem from '../components/GoalItem';

import { fetchGoals } from '../utility/http';

function AllGoals() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals()  // Use the new fetchGoals function to get the goals
      .then(fetchedGoals => setGoals(fetchedGoals))
      .catch(error => console.error('Error fetching goals:', error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GoalItem text={item.text} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
});

export default AllGoals;
