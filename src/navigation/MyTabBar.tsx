import { View } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Icon from '@react-native-vector-icons/evil-icons';


function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const { colors } = useTheme();
    const { buildHref } = useLinkBuilder();

    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label: string =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel as string
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <PlatformPressable
                        key={index}
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <View style={{ paddingVertical: 5 }}>
                            <Icon name={label === 'Home' ? 'heart'
                                : label === 'Properties' ? 'image'
                                    : label === 'Profile' ? 'user'
                                        : 'user'}
                                size={30} color={isFocused ? colors.primary : colors.text}
                                style={{ textAlign: "center" }}
                            />
                            <Text style={{
                                color: isFocused ? colors.primary : colors.text,
                                textAlign: "center",
                            }}>
                                {label}
                            </Text>
                        </View>
                    </PlatformPressable>
                );
            })}
        </View>
    );
}

export default MyTabBar