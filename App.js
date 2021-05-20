import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, Dimensions, Platform
  , ImageBackground, FlatList, TouchableOpacity, Image, Animated, TextInput, LogBox
} from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, Entypo, FontAwesome5, FontAwesome, Feather } from '@expo/vector-icons';
import { Easing } from 'react-native-reanimated';


const { width, height } = Dimensions.get('screen')

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const categories = ["Salad", "Seafood", "Soft Drinks", "Grills"]

const screen1 = () => {

  const rotate = React.useRef(new Animated.Value(0)).current
  const [counter, setCounter] = React.useState(0)
  const navigation = useNavigation()
  React.useEffect(() => {
    Animated.spring(rotate, {
      toValue: 1,
      easing: Easing.linear,
      duration: 200,
      useNativeDriver: true,
      delay: 300
    }).start()
  })
  return (
    <ImageBackground
      source={require('./assets/foodbackground.jpg')}
      style={StyleSheet.absoluteFill}
      blurRadius={40}
    >
      {LogBox.ignoreAllLogs(true)}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.2, y: 0.7 }}
        colors={['rgba( 255, 255, 255, 0.25 )', 'rgba( 255, 255, 255, 0.3)', 'rgba( 255, 255, 255, 0.35)']}
        style={{
          width,
          height,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {/* menu and Notification bar */}
        <View style={{
          width: width * 0.9,
          height: height * 0.05,
          marginTop: Platform.OS === "ios" ? height * 0.06 : height * 0.05,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center'
        }}>


          <TouchableOpacity style={{
            width: width * 0.05,
            height: width * 0.055,
            borderTopWidth: 3,
            borderBottomWidth: 3,
            borderColor: 'black',
            justifyContent: 'center',
          }}>
            <View style={{
              width: width * 0.035,
              borderBottomWidth: 3,
              borderColor: 'black'
            }} />
          </TouchableOpacity>

          <View style={{
            flexDirection: 'row'
          }}>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={35} color="black" />
              <View style={{
                position: 'absolute',
                width: width * 0.03,
                height: width * 0.03,
                borderRadius: (width * 0.05) / 2,
                backgroundColor: 'orange',
                borderWidth: 1,
                borderColor: 'white',
                right: 6,
                top: 4,
                transform: [{
                  scale: 0.8
                }]
              }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('cart')}>
              <AntDesign name="shoppingcart" size={35} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Choose your healthy food*/}

        <Text style={{
          fontSize: 50,
          fontWeight: 'bold',
          width: width * 0.9,
          alignSelf: 'center',
          marginTop: Platform.OS === "ios" ? 20 : 10
        }} >
          Take Your Healthy Foods
        </Text>

        {/* ..............................................*/}


        {/* Categories*/}

        <Text style={{
          fontSize: 30,
          marginLeft: width * 0.1,
          marginTop: Platform.OS === "ios" ? 30 : 10,
          fontWeight: '400',
          width
        }}>
          Categories
        </Text>

        <FlatList
          data={categories}
          keyExtractor={(_, i) => { return i }}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{ paddingHorizontal: width * 0.05, marginTop: Platform.OS === "ios" ? 15 : 10 }}
          renderItem={(item) => {
            return (
              <TouchableOpacity style={{
                backgroundColor: item.item === "Salad" ? 'black' : 'rgba(255, 255, 255, 0.25)',
                height: Platform.OS === "ios" ? height * 0.05 : height * 0.05,
                paddingHorizontal: 20,
                marginLeft: item.index !== 0 ? 20 : 0,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20
              }}
              >
                <Text
                  style={{
                    color: item.item === "Salad" ? 'white' : 'black',
                    fontSize: 20,
                    fontWeight: '400'
                  }}
                >{item.item}</Text>
              </TouchableOpacity>
            )
          }}
        />

        {/* ..............................................*/}

        {/* food*/}

        <View style={{
          width: width,
          height: height * 0.56,
          flexDirection: 'row'
        }}>
          <View style={{
            flex: 1.8,
            paddingLeft: width * 0.05
          }}>
            <Text style={{
              color: '#474947', fontSize: 15
            }}>Size</Text>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 0 }}>Medium</Text>
            <Text style={{ color: 'black', fontSize: 13, marginTop: Platform.OS === "ios" ? 5 : 3, fontWeight: '600' }}>$1.75</Text>

            <Text style={{ color: '#474947', fontSize: 15, marginTop: Platform.OS === "ios" ? 20 : 10 }}>Shipping Fee</Text>
            <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', marginTop: Platform.OS === "ios" ? 5 : 3 }}>2.5 Km</Text>
            <Text style={{ color: 'black', fontSize: 13, marginTop: Platform.OS === "ios" ? 5 : 3, fontWeight: '600' }}>$0.5</Text>

            <Text style={{ color: '#474947', fontSize: 15, marginTop: Platform.OS === "ios" ? 20 : 10 }}>Delievery In</Text>
            <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', marginTop: Platform.OS === "ios" ? 5 : 3, letterSpacing: 0 }}>10 min</Text>
            <Text style={{ color: 'black', fontSize: 13, marginTop: Platform.OS === "ios" ? 5 : 3, fontWeight: '600' }}>Motorbike</Text>

            <View style={{
              width: Platform.OS === "ios" ? '80%' : '50%',
              height: Platform.OS === "ios" ? '10%' : '8%',
              marginTop: Platform.OS === "ios" ? 15 : 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <TouchableOpacity style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                width: Platform.OS === "ios" ? '25%' : '30%',
                height: Platform.OS === "ios" ? '70%' : '70%',
                borderRadius: 10
              }}

              >
                <Entypo name="plus" size={Platform.OS === "ios" ? 25 : 15} color="white" onPress={() => setCounter(counter + 1)} />
              </TouchableOpacity>

              <Text style={{
                fontSize: Platform.OS === "ios" ? 25 : 20
              }}>{counter}</Text>

              <TouchableOpacity style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                width: Platform.OS === "ios" ? '25%' : '30%',
                height: Platform.OS === "ios" ? '70%' : '70%',
                borderRadius: 10
              }}

              >
                <Entypo name="minus" size={Platform.OS === "ios" ? 25 : 15} color="white" onPress={() => setCounter(counter === 0 ? 0 : counter - 1)} />
              </TouchableOpacity>
            </View>


            <Text
              style={{
                width: Platform.OS === "ios" ? width * 0.94 : width * 0.75,
                fontSize: Platform.OS === "ios" ? 17 : 15,
                fontWeight: 'bold',
                position: 'absolute',
                bottom: 125,
                left: Platform.OS === "ios" ? width * 0.025 : width * 0.12,
                textAlign: 'center',
                lineHeight: Platform.OS === "ios" ? 25 : 23
              }}

            >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
          </View>

          <View style={{
            flex: 2,

          }}>
            <Animated.Image
              source={require('./assets/plate1.png')}
              style={{
                width: '160%',
                height: '60%',
                resizeMode: 'contain',
                position: 'absolute',
                transform: [{
                  translateX: -50,
                }, { scale: 1 }, { translateY: 0 }, {
                  rotate: rotate.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "720deg"],
                  })
                }
                ],
                // shadowOpacity: 0.5,
                // shadowRadius: 2,
                // shadowOffset: {
                //   width: -22,
                //   height: 10
                // },
              }}
            />
          </View>

        </View>


        {/* ..............................................*/}

      </LinearGradient>
    </ImageBackground >
  )
}

const cart = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./assets/foodbackground.jpg')}
      style={StyleSheet.absoluteFill}
      blurRadius={40}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.2, y: 0.7 }}
        colors={['rgba( 255, 255, 255, 0.25 )', 'rgba( 255, 255, 255, 0.3)', 'rgba( 255, 255, 255, 0.35)']}
        style={{
          width,
          height,
        }}
      >

        {/* menu and Notification bar */}
        <View style={{
          width: width * 0.9,
          height: height * 0.05,
          marginTop: Platform.OS === "ios" ? height * 0.06 : height * 0.05,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center'
        }}>


          <TouchableOpacity style={{
            width: width * 0.05,
            height: width * 0.055,
            borderTopWidth: 3,
            borderBottomWidth: 3,
            borderColor: 'black',
            justifyContent: 'center',
          }}>
            <View style={{
              width: width * 0.035,
              borderBottomWidth: 3,
              borderColor: 'black'
            }} />
          </TouchableOpacity>

          <View style={{
            flexDirection: 'row'
          }}>
            <TouchableOpacity>
              <Entypo name="dots-three-vertical" size={35} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        {/* .................................. */}

        {/* Search Input */}
        <View style={{
          width: width * 0.9,
          height: height * 0.06,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          borderBottomWidth: 2
        }}>
          <AntDesign name="search1" size={30} color="black" />
          <TextInput placeholder='Search Your Food' style={{
            width: '80%',
            height: '50%',
            paddingHorizontal: 10,
            fontSize: 15,
            fontWeight: '400'
          }}
            placeholderTextColor='black' />

          <View style={{
            backgroundColor: 'black',
            width: width * 0.1,
            height: width * 0.1,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{
              rotate: '90deg'
            }],
            borderRadius: 10,
            // marginLeft: '10%'
          }}>
            <FontAwesome name="sliders" size={25} color="white" />
          </View>
        </View>
        {/* .................................. */}

        {/* cards */}

        <View style={{
          position: 'relative',

        }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0.2, y: 0.7 }}
            colors={['rgba( 255, 255, 255, 0.25 )', 'rgba( 255, 255, 255, 0.3)', 'rgba( 255, 255, 255, 0.35)']}
            style={{
              width: width * 0.9,
              height: height * 0.2,
              alignSelf: 'center',
              marginTop: Platform.OS === "ios" ? 40 : 20,
              borderRadius: 20,
              paddingHorizontal: 30,
              paddingVertical: 10
            }}
          >
            <Text style={{
              fontWeight: 'bold',
              fontSize: Platform.OS === "ios" ? 30 : 25,
              width: '60%'
            }}>Classic Fast Food</Text>
            <Text style={{
              fontSize: 15,
              bottom: 10
            }}>$
              <View>
                <Text style={{
                  fontWeight: 'bold', fontSize: 30, transform: [{ translateY: 15 }]
                }}

                > {'5'}
                </Text>
              </View> .29</Text>

            <TouchableOpacity style={{
              marginTop: 10,
              backgroundColor: 'black',
              width: '25%',
              height: '20%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10
            }}>
              <Text style={{
                color: 'white',
                fontSize: 17
              }}>Order</Text>
            </TouchableOpacity>
          </LinearGradient>

          <View style={{
            position: 'absolute',
            right: Platform.OS === "ios" ? -30 : -30,
            zIndex: 100,
            top: Platform.OS === "ios" ? -5 : -8,

          }}>
            <Image
              source={require('./assets/plate2.png')}
              style={{
                width: width * 0.6,
                height: Platform.OS === "ios" ? height * 0.3 : height * 0.27,
                resizeMode: 'contain',
                shadowOpacity: 0.6,
                shadowRadius: 4,

                transform: [{
                  scale: 0.7
                }]

              }}
            />


          </View>
        </View>

        <View style={{
          position: 'relative',

        }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0.2, y: 0.7 }}
            colors={['rgba( 255, 255, 255, 0.25 )', 'rgba( 255, 255, 255, 0.3)', 'rgba( 255, 255, 255, 0.35)']}
            style={{
              width: width * 0.9,
              height: height * 0.2,
              alignSelf: 'center',
              marginTop: 20,
              borderRadius: 20,
              paddingHorizontal: 30,
              paddingVertical: 10
            }}
          >
            <Text style={{
              fontWeight: 'bold',
              fontSize: Platform.OS === "ios" ? 30 : 25,
              width: '60%'
            }}>Can You Fry Foods</Text>
            <Text style={{
              fontSize: 15,
              bottom: 10
            }}>$
              <View>
                <Text style={{
                  fontWeight: 'bold', fontSize: 30, transform: [{ translateY: 15 }]
                }}

                > {'2'}
                </Text>
              </View> .29</Text>

            <TouchableOpacity style={{
              marginTop: 10,
              backgroundColor: 'black',
              width: '25%',
              height: '20%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10
            }}>
              <Text style={{
                color: 'white',
                fontSize: 17
              }}>Order</Text>
            </TouchableOpacity>
          </LinearGradient>

          <View style={{
            position: 'absolute',
            right: -30,
            zIndex: 100,
            top: Platform.OS === "ios" ? -25 : -8,

          }}>
            <Image
              source={require('./assets/plate1.png')}
              style={{
                width: width * 0.6,
                height: Platform.OS === "ios" ? height * 0.3 : height * 0.27,
                resizeMode: 'contain',
                shadowOpacity: 0.6,
                shadowRadius: 4,

                transform: [{
                  scale: 0.7
                }]

              }}
            />


          </View>
        </View>

        {/* .................................. */}

        {/*Delievery Text*/}

        <View style={{
          paddingHorizontal: 20,
          height: height * 0.25,
          justifyContent: 'space-around',
          marginTop: 20
        }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Delievery Time</Text>
          <Text style={{
            fontSize: 15, color: '#474947', width: Platform.OS === "ios" ? width * 0.6 : width * 0.6, marginTop: 10, lineHeight: 20
          }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</Text>

          <View style={{
            flexDirection: 'row',
            width,
            alignItems: 'center'
          }}>
            <Feather name="clock" size={30} color="black" />
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}> 25 Mins.</Text>
          </View>

          <Text style={{ fontSize: 20, fontWeight: '400' }}>Total Price: <Text style={{ fontSize: 23, fontWeight: 'bold' }}>  $ 25.00</Text></Text>

          <Image
            source={require('./assets/panda.png')}
            style={{
              width: Platform.OS === "ios" ? '100%' : '96%',
              height: Platform.OS === "ios" ? '80%' : '72%',
              resizeMode: 'contain',
              position: 'absolute',
              right: Platform.OS === "ios" ? -90 : -87,
              bottom: -19,
              transform: [{
                scale: Platform.OS === "ios" ? 1 : 0.95
              }]
            }}
          />
        </View>
      </LinearGradient>
    </ImageBackground >
  )
}


const home = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      style: {
        width: width * 0.9,
        height: Platform.OS === "ios" ? height * 0.09 : height * 0.08,
        bottom: Platform.OS === "ios" ? 25 : 5,
        left: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#13110b',
        borderRadius: 30,
        elevation: 0,
        position: 'absolute',
        borderTopColor: '#13110b',
        shadowOpacity: 0.7,
        shadowOffset: {
          height: 3,
          width: 2
        },
        shadowRadius: 10
      },
      showLabel: false,
    }}
    >
      <Tab.Screen name="Home" component={screen1} options={{
        tabBarIcon: (props) => {
          return (
            <View style={{
              width: Platform.OS === "ios" ? width * 0.12 : width * 0.09,
              height: Platform.OS === "ios" ? width * 0.12 : width * 0.09,
              borderRadius: (width * 0.15) / 2,
              backgroundColor: props.focused ? 'rgba( 255, 255, 255, 0.1 )' : '#13110b',
              top: Platform.OS === "ios" ? 15 : 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <AntDesign name="home" size={Platform.OS === "ios" ? 26 : 20} color="white" />
            </View>
          )
        },
      }} />
      <Tab.Screen name="Wallet" component={screen2} options={{
        tabBarIcon: (props) => {
          return (
            <View style={{
              width: Platform.OS === "ios" ? width * 0.12 : width * 0.09,
              height: Platform.OS === "ios" ? width * 0.12 : width * 0.09,
              borderRadius: (width * 0.15) / 2,
              backgroundColor: props.focused ? 'rgba( 255, 255, 255, 0.1 )' : '#13110b',
              top: Platform.OS === "ios" ? 15 : 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <AntDesign name="wallet" size={Platform.OS === "ios" ? 26 : 20} color="white" />
            </View>
          )
        }
      }} />
      <Tab.Screen name="Chat" component={screen3} options={{
        tabBarIcon: (props) => {
          return (
            <View style={{
              width: Platform.OS === "ios" ? width * 0.12 : width * 0.09,
              height: Platform.OS === "ios" ? width * 0.12 : width * 0.09,
              borderRadius: (width * 0.15) / 2,
              backgroundColor: props.focused ? 'rgba( 255, 255, 255, 0.1 )' : '#13110b',
              top: Platform.OS === "ios" ? 15 : 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <AntDesign name="wechat" size={Platform.OS === "ios" ? 26 : 20} color="white" />
            </View>
          )
        }
      }} />
      <Tab.Screen name="Profile" component={screen4} options={{
        tabBarIcon: (props) => {
          return (
            <View style={{
              width: Platform.OS === "ios" ? width * 0.12 : width * 0.09,
              height: Platform.OS === "ios" ? width * 0.12 : width * 0.09,
              borderRadius: (width * 0.15) / 2,
              backgroundColor: props.focused ? 'rgba( 255, 255, 255, 0.1 )' : '#13110b',
              top: Platform.OS === "ios" ? 15 : 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Ionicons name="person-outline" size={Platform.OS === "ios" ? 24 : 20} color="white" />
            </View>
          )
        }
      }} />
    </Tab.Navigator>
  )
}

const screen2 = () => {
  return (
    <ImageBackground
      source={require('./assets/foodbackground.jpg')}
      style={StyleSheet.absoluteFill}
      blurRadius={40}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.2, y: 0.7 }}
        colors={['rgba( 255, 255, 255, 0.25 )', 'rgba( 255, 255, 255, 0.3)', 'rgba( 255, 255, 255, 0.35)']}
        style={{
          width,
          height,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>Details</Text>
      </LinearGradient>
    </ImageBackground>
  )

}


const screen3 = () => {
  return (
    <ImageBackground
      source={require('./assets/foodbackground.jpg')}
      style={StyleSheet.absoluteFill}
      blurRadius={40}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.2, y: 0.7 }}
        colors={['rgba( 255, 255, 255, 0.25 )', 'rgba( 255, 255, 255, 0.3)', 'rgba( 255, 255, 255, 0.35)']}
        style={{
          width,
          height,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>Chat</Text>
      </LinearGradient>
    </ImageBackground>
  )
}

const screen4 = () => {
  return (
    <ImageBackground
      source={require('./assets/foodbackground.jpg')}
      style={StyleSheet.absoluteFill}
      blurRadius={40}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.2, y: 0.7 }}
        colors={['rgba( 255, 255, 255, 0.25 )', 'rgba( 255, 255, 255, 0.3)', 'rgba( 255, 255, 255, 0.35)']}
        style={{
          width,
          height,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>Profile</Text>
      </LinearGradient>
    </ImageBackground>
  )
}
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={home} />
        <Stack.Screen name='cart' component={cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#977464',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
