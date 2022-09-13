import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  FontAwesome,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function ({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <LinearGradient
        colors={["#06b6d4", "#10b981"]}
        start={{ x: 0.2, y: 0.1 }}
        end={{ x: 1.2, y: 0.6 }}
        locations={[0.3, 1]}
        style={{
          // flex: 1,
          paddingTop: 90,
        }}
      ></LinearGradient>
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <FontAwesome
          name="dashboard"
          size={24}
          color="grey"
          style={{
            marginLeft: 20,
          }}
        />
        <Text
          style={{
            fontSize: 17,
            marginLeft: 11,
          }}
        >
          Dashboard
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Seller")}
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginLeft: 25,
          alignItems: "center",
        }}
      >
        <FontAwesome name="user" size={24} color="grey" />
        <Text
          style={{
            marginLeft: 11,
            fontSize: 17,
          }}
        >
          Seller
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Buyer")}
        style={{
          marginLeft: 20,
          marginTop: 20,
          flexDirection: "row",
        }}
      >
        <Ionicons name="people" size={24} color="grey" />
        <Text
          style={{
            marginLeft: 11,
            fontSize: 17,
          }}
        >
          Buyer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate("Driver")}
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginLeft: 20,
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="truck-delivery" size={24} color="grey" />
        <Text
          style={{
            marginLeft: 11,
            fontSize: 17,
          }}
        >
          Driver
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginLeft: 20,
          marginTop: 20,
          flexDirection: "row",
        }}
      >
        <MaterialIcons name="feedback" size={24} color="grey" />
        <Text
          style={{
            marginLeft: 11,
            fontSize: 17,
          }}
        >
          Feedback
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginLeft: 20,
          alignItems: "center",
        }}
      >
        <AntDesign name="login" size={24} color="grey" />
        <Text
          style={{
            marginLeft: 11,
            fontSize: 17,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Main")}
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginLeft: 20,
          alignItems: "center",
        }}
      >
        <Octicons name="sign-out" size={24} color="grey" />
        <Text
          style={{
            marginLeft: 16,
            fontSize: 17,
          }}
        >
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}
