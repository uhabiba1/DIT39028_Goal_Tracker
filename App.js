import React, { useState, useEffect } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import axios from 'axios';    // to handle HTTP request API

import HomeScreen from './src/screens/HomeScreen';
import AddGoal from './src/screens/AddGoal';
import AllGoals from './src/screens/AllGoals';

import { storeGoal, fetchGoals } from './src/utility/http'; 

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  useEffect(() => {
    fetchGoals()  // Call the fetchGoals function to retrieve goals
      .then(fetchedGoals => setCourseGoals(fetchedGoals))
      .catch(error => console.error('Error fetching goals:', error));
  }, []);

  function addGoalHandler(enteredGoalText) {
    storeGoal(enteredGoalText)  // Call the storeGoal function
      .then(response => {
        // Assuming the response contains the goal that was added
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, response.data]);
      })
      .catch(error => console.error('Error adding goal:', error));
  }

  const BottomTabs = createBottomTabNavigator();
  function GoalOverview() {
    return (
        <BottomTabs.Navigator>
          <BottomTabs.Screen name="Add New Goal">
            {props => <AddGoal {...props} onAddGoal={addGoalHandler} />}
          </BottomTabs.Screen>
    
          <BottomTabs.Screen name="List of Goals">
            {props => <AllGoals {...props} goals={courseGoals} />}
          </BottomTabs.Screen>
        </BottomTabs.Navigator>
    );
  }
  
  const Stack = createStackNavigator();
  
  function MyStack(){
    return (
      // Navigator Stack on the HomeScreen
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'My Home'}}
          />
          <Stack.Screen 
            name="Goal Tracker" 
            component={GoalOverview} 
          />

          <Stack.Screen name="Add New Goal" options={{title: 'Add Goal'}}>
            {props => <AddGoal {...props} onAddGoal={addGoalHandler} />}
          </Stack.Screen>
      
          <Stack.Screen name="List of Goals">
            {props => <AllGoals {...props} goals={courseGoals} />}
          </Stack.Screen>


        </Stack.Navigator>
    );
  } 
  

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}