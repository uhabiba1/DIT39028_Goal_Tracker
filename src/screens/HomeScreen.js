import { useNavigation} from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';

  function HomeScreen() {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Goal Tracker!</Text>

        <View style={styles.goalTrackingButton}>
            <Button onPress={() => navigation.navigate('Goal Tracker')}>Start Tracking</Button>
        </View>

        <View style={styles.listGoalButton}>
            <Button
                onPress={() =>
                navigation.navigate('List of Goals')
            }> 
                Check Your Goals
            </Button>
        </View>

      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20
  },
  goalTrackingButton:{
    pading: 20
  },
  listGoalButton: {
    paddingTop: 20
  }
});

export default HomeScreen;