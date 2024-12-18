import { Link } from '@react-navigation/native'
import { View, Text, Button } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Text >Go profile</Text>
      <Button
      title='Profile'
      onPress={()=>navigation.navigate("Profile",{name:"Profile"})}
      />
    </View>
  )
}

export default Home