import React, { useState } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './src/screens/HomeScreen';
import AddGoal from './src/screens/AddGoal';
import AllGoals from './src/screens/AllGoals';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
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