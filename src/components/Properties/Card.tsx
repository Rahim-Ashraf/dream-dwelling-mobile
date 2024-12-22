import { useState } from 'react';
import { View, Text, Image, Button, SafeAreaView, Modal, Alert, Pressable } from 'react-native'

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

const Card = ({ property }: { property: Property }) => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View
            key={property._id}
            style={{
                borderRadius: 10, overflow: "hidden",
                marginBottom: 20,
            }}>

            <Image
                source={{ uri: 'https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004049.jpg' }}
                style={{
                    width: "auto", height: 200,
                    borderRadius: 10,
                    marginBottom: 10,
                }}
            />
            <View >
                <View>
                    <Text >{property.property_title}</Text>
                    <View >
                        <View >
                            {/* <FaLocationDot /> */}
                            <Text>{property.property_location}</Text>
                        </View>
                        <Text style={{ fontWeight: 500 }}>Status: <Text style={{ color: "#000fff" }}>{property.verification_status}</Text></Text>
                    </View>
                    <Text><Text>${property.price_range}</Text></Text>
                    <View></View>
                    <View>
                        <Text>Agent: {property.agent_name}</Text>
                        <View>
                            <Image
                                src={property.agent_image}
                                alt="" />
                        </View>
                    </View>
                </View>
                <SafeAreaView style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Modal
                        // animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <View style={{
                                backgroundColor: 'white',
                                borderRadius: 10,
                                padding: 40,
                                alignItems: 'center',
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 4,
                                // elevation: 5,
                            }}>
                                <Text style={{
                                    marginBottom: 15,
                                    textAlign: 'center',
                                }}>Hello World! Welcome to Dream Dwelling</Text>
                                <Pressable
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={{
                                        marginBottom: 15,
                                        textAlign: 'center',
                                    }}>Hide Modal</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </SafeAreaView>
                <View >
                    <Button
                        onPress={() => setModalVisible(true)}
                        title='View'
                        color='#00aaf0'
                    />
                    {/* <Link href={`/property-details/${properties[0]._id}`}>
                     <PrimaryButton btnText={"Details"}></PrimaryButton>
                   </Link> */}
                </View>
            </View>
        </View>
    )
}

export default Card