import axios from 'axios';

const BACKEND_URL = 'http://10.0.0.75:3000';

export function storeGoal(goalText){
    return axios.post(BACKEND_URL + '/add-goal', {text: goalText})  // API end point to add new goal
}

export async function fetchGoals() {
  const response = await axios.get(BACKEND_URL + '/goals');  // API endpoint to list of goals
  const goals = response.data.map(goal => ({
    id: goal.id,                
    text: goal.goal_text,  
  }));

  return goals;
}
