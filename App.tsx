import { StatusBar, StyleSheet, useColorScheme, } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import Root from './src/navigation/Root';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Root />
    </GestureHandlerRootView>
  );
}

export default App;
