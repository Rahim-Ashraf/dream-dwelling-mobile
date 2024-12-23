import Home from '../components/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../components/Profile/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Properties from '../components/Properties/Properties';
import MyTabBar from './MyTabBar';
import Icon from '@react-native-vector-icons/evil-icons';

type RootStackParamList = {
  Home: undefined;
  Properties: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>()

const Root = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        backBehavior='history'
        tabBar={(props) => <MyTabBar {...props} />}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = <Icon name='heart' size={size} color={color} />;
            } else if (route.name === 'Profile') {
              iconName = <Icon name='user' size={size} color={color} />;
            } else if (route.name === 'Properties') {
              iconName = <Icon name='archive' size={size} color={color} />;
            }

            // Return the appropriate icon
            return <Icon name='user' size={40} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false, }}
        />
        <Tab.Screen
          name='Properties'
          component={Properties}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Root