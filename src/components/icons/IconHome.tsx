import { View, Text, Image } from 'react-native'

const IconHome = () => {
    return (
        <View>
            <Image
                source={require('./home.png')}
                style={{ width: 20, height: 200 }}
            />
        </View>
    )
}

export default IconHome