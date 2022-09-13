import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screen/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./screen/Login";
import Main from "./screen/Main";
import Signup from "./screen/Signup";
import Admin from "./screen/Admin";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import Seller from "./screen/Seller";
import Alexandrite from "./components/Alexandrite";
import Yellow from "./components/Yellow";
import LightPurple from "./components/LightPurple";
import Blue from "./components/Blue";
import Black from "./components/Black";
import Purple from "./components/Purple";
import CustomDrawer from "./components/CustomDrawer";
import Blue1 from "./components/Blue1";
import Yellow1 from "./components/Yellow1";
import Buyer from "./screen/Buyer";
import Driver from "./screen/Driver";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const MyDrawer = () => (
  <Drawer.Navigator
    useLegacyImplementation
    initialRouteName="Home"
    drawerContent={(props) => <CustomDrawer {...props} />}
  >
    <Drawer.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
  </Drawer.Navigator>
);

const MyTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={MyDrawer}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="md-home" size={size} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Admin"
      component={Admin}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="user-alt" size={size} color={color} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={MyTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Alexandrite"
          component={Alexandrite}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Yellow"
          component={Yellow}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Lightpurple"
          component={LightPurple}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Blue"
          component={Blue}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Black"
          component={Black}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Purple"
          component={Purple}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Blue1"
          component={Blue1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Yellow1"
          component={Yellow1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Seller"
          component={Seller}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Buyer"
          component={Buyer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Driver" component={Driver} options={{
          headerShown: false
        }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
