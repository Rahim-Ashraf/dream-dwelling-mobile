import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native'

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
};
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Home</Text>
      <Text >Go profile</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile', { userId: 'Profile' })}
      />
    </View>
  )
}

export default Home