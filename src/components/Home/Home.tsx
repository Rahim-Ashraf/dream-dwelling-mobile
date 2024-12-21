import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
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
      <View style={{ padding: 20 }}>
        <Text
          style={{ fontSize: 50, textAlign: "center", marginBottom: 20 }}
        >Hello there</Text>
        <Text style={{ textAlign: "center", marginBottom: 40 }}>
          At Dream Dwelling, we help you find more than just a house—we help you discover the perfect home. With a curated selection of top-tier properties and personalized services, your dream home is just a click away. Begin your journey today and experience the difference with Dream Dwelling
        </Text>
        <View style={{ width: 200, margin: "auto" }}>
          <Button title='Get Started' />
        </View>
      </View>
      <View style={{ padding: 20 }}>
        {
          advertisements.map(({ _id, property_location, price_range, property_image }) => <View
            key={_id}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginBottom: 20,
              backgroundColor: "#0066ff0f",
              borderRadius: 20
            }}
          >
              <Image
                source={{uri:'https://placehold.co/600x400/EEE/31343C'}}
                style={{ width: 200, height: 150 }}
              />
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text>{property_location}</Text>
              <Text>{price_range}</Text>
            </View>
          </View>
          )
        }
      </View>
    </ScrollView>
  )
}

export default Home