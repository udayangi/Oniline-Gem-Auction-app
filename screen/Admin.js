import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Admin({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}
    >
      {/* <LinearGradient
        colors={["#06b6d4", "#c026d3"]}
        start={{ x: 0.3, y: 0.2 }}
        end={{ x: 1.2, y: 0.6 }}
        locations={[0.5, 1]}
        style={{
          flex: 1,
          paddingTop: 40
        }}
      > */}
        
        <Text style={{
          justifyContent: 'center',
          textAlign: 'center',
          paddingTop: '50%',
          fontSize: 27,
          fontWeight: 'bold'
        }}>This is Admin Dashboard</Text>
      {/* </LinearGradient> */}
    </View>
  );
}
