import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, Text, View } from "react-native"

type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
};
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
    

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

export default HomeScreen