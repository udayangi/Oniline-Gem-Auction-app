import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Ionicons, Entypo, Feather } from "@expo/vector-icons";

const items = [
  {
    image: require("../picture/instagram.png"),
  },
];

export default function Login({ navigation }) {
  const [isPresse, setPressed] = useState(false);
  return (
    <>
      <View
        style={{
          marginTop: 35,
          marginLeft: 15,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Feather name="arrow-left" size={28} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          Login
        </Text>
      </View>
      <View
        style={{
          marginTop: 50,
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome name="user-circle-o" size={100} color="grey" style={{}} />
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: "grey",
          paddingBottom: 8,
          paddingTop: 8,
          borderRadius: 5,
          marginTop: 60,
          paddingRight: 40,
          marginLeft: 25,
          marginRight: 25,
          paddingLeft: 10,
        }}
      >
        <TextInput
          placeholder="Email or User name"
          style={{
            fontSize: 15,
          }}
        />
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: "grey",
          paddingBottom: 8,
          paddingTop: 8,
          borderRadius: 5,
          marginTop: 10,
          paddingRight: 40,
          marginLeft: 25,
          marginRight: 25,
          paddingLeft: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          secureTextEntry={isPresse ? true : false}
          placeholder="password"
          style={{
            fontSize: 15,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setPressed(!isPresse);
          }}
        >
          <Ionicons
            name={isPresse ? "eye-off-outline" : "eye-outline"}
            size={18}
            color={isPresse ? "black" : "grey"}
            style={{
              marginLeft: 200,
            }}
          />
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={["#06b6d4", "#c026d3"]}
        start={{ x: 0.3, y: 0 }}
        end={{ x: 1, y: 0.1 }}
        locations={[0, 0.9]}
        style={{
          borderRadius: 6,
          marginTop: 60,
          width: 100,
          alignSelf: "center",
          paddingBottom: 5,
          paddingTop: 5,
        }}
      >
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              fontSize: 27,
              color: "white",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <View
        style={{
          marginTop: 20,
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          If you haven't any account?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          style={{
            paddingTop: 9,
          }}
        >
          <Text
            style={{
              color: "#1e3a8a",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 100,
        }}
      >
        <TouchableOpacity
          style={{
            marginRight: 20,
          }}
        >
          <Entypo name="facebook" size={30} color="#2563eb" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginRight: 20,
          }}
        >
          <Image
            source={items[0].image}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginRight: 20,
          }}
        >
          <Entypo name="linkedin" size={30} color="#2563eb" />
        </TouchableOpacity>
      </View>
    </>
  );
}
