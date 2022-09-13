import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome5, FontAwesome, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Platform } from "react-native";


export default function Main({ navigation }) {
  return (
    <>
      <View
        style={{
          flex: 1,
        }}
      >
        <LinearGradient
          colors={["#06b6d4", "#c026d3"]}
          start={{ x: 0.3, y: 0.2 }}
          end={{ x: 1.2, y: 0.6 }}
          locations={[0.5, 1]}
          style={{
            flex: 1,
          }}
        >
          <FontAwesome5
            name="gem"
            size={70}
            color="white"
            style={{
              alignSelf: "center",
              marginTop: 160,
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              marginTop: 20,
              fontSize: 17,
              color: "white",
            }}
          >
            WELCOME TO
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              alignSelf: "center",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Gemic
            <Text
              style={{
                fontWeight: "300",
              }}
            >
              Store
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              marginTop: "30%",
              backgroundColor: "white",
              borderRadius: 30,
              paddingBottom: 4,
              paddingTop: 4,
              alignSelf: "center",
              paddingHorizontal: 26,
              paddingVertical: 9,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
              }}
            >
              Login
            </Text>
            <AntDesign
              name="login"
              size={24}
              color="black"
              style={{
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={{
              marginTop: 20,
              backgroundColor: "white",
              borderRadius: 30,
              paddingBottom: 4,
              paddingTop: 4,
              alignSelf: "center",
              paddingHorizontal: 40,
              paddingVertical: 9,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
              }}
            >
              Sign Up
            </Text>

            <FontAwesome
              name="sign-out"
              size={24}
              color="black"
              style={{
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </>
  );
}
