import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Button, Image, ImageBackground, ScrollView, Text, View } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Properties: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

interface advertiseType {
  agent_email: string;
  price_range: string;
  property_id: string;
  property_image: string;
  property_location: string;
  verification_status: string;
  _id: string;
}

const Home = ({ navigation }: Props) => {
  const [advertisements, setAdvertisements] = useState<advertiseType[]>([])
  useEffect(() => {
    fetch("https://dream-dwellings-server.vercel.app/advertisements")
      .then(async (propertyRes) => {
        const advertiseData = await propertyRes.json()
        setAdvertisements(advertiseData)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <ScrollView>

      <ImageBackground
        source={require('../../components/icons/greg-rivers-min.jpg')}
        resizeMode="cover" >
        <View
          style={{ padding: 50, backgroundColor: '#00001aaa', }}>
          <Text
            style={{
              fontSize: 50, textAlign: "center",
              marginBottom: 20, color: "white"
            }}
          >Hello there</Text>
          <Text
            style={{
              textAlign: "center", marginBottom: 40,
              color: "white"
            }}>
            At Dream Dwelling, we help you find more than just a house—we help you discover the perfect home. With a curated selection of top-tier properties and personalized services, your dream home is just a click away. Begin your journey today and experience the difference with Dream Dwelling
          </Text>
          <View style={{ width: 200, margin: "auto" }}>
            <Button title='Get Started'
              onPress={() => navigation.navigate('Properties')} />
          </View>
        </View>
      </ImageBackground>

      <View style={{ padding: 20 }}>
        <Text style={{
          fontSize: 30, textAlign: "center",
          color: "#0aa0ff", marginVertical: 10,
        }}>Featured listings</Text>
        {
          advertisements.map(({ _id, property_location, price_range, property_image }) => <View
            key={_id}
            style={{
              padding: 10,
              marginBottom: 20,
              backgroundColor: "#0066ff0f",
              borderRadius: 20
            }}
          >
            <Image
              // uri: 'https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004049.jpg'
              source={{ uri: 'https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004049.jpg' }}
              style={{
                width: "auto", height: 200,
                borderRadius: 10,
                marginBottom: 10,
              }}
              onError={(error) => console.log('Image loading error:', error.nativeEvent)}
              onLoadStart={() => console.log('Image loading started', property_image)}
              onLoad={() => console.log('Image loading successful')}
            />
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}>
              <Text>{property_location}</Text>
              <Text>{price_range}</Text>
            </View>
            <Button
              title='View'
              color='#00aaf0'
            />
          </View>
          )
        }
      </View>
    </ScrollView >
  )
}

export default Home