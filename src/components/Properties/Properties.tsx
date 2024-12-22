import { useEffect, useState } from 'react'
import { Text, ScrollView, } from 'react-native'
import Card from './Card';

interface Property {
  _id: string;
  agent_email: string;
  agent_image: string;
  agent_name: string;
  price_range: string;
  property_image: string;
  property_location: string;
  property_title: string;
  verification_status: string;
}

const Properties = () => {
  const [properties, setProperties] = useState<Property[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dream-dwellings-server.vercel.app/verified-properties')
        const data = await res.json()
        console.log(data)
        setProperties(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <ScrollView style={{ paddingHorizontal: 10 }}>
      <Text
        style={{
          fontSize: 50, textAlign: "center",
          marginBottom: 20, color: "white"
        }}
      >Properties</Text>
      {
        properties.map(property => <Card key={property._id} property={property} />)
      }
    </ScrollView>
  )
}

export default Properties