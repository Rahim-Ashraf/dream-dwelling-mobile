import Home from '../components/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../components/Profile/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Properties from '../components/Properties/Properties';
import MyTabBar from './MyTabBar';
import IconHome from '../components/icons/IconHome';

type RootStackParamList = {
  Home: undefined;
  Properties: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>()

const Root = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator backBehavior='history'
        tabBar={(props) => <MyTabBar {...props} />}>
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