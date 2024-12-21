import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Profile/Profile';
import HomeScreen from './HomeScreen';

type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Properties: undefined;
};
const Tab = createBottomTabNavigator<BottomTabParamList>();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Properties"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  )
}

export default Home