import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Divider from "react-native-divider";
import { LinearGradient } from "expo-linear-gradient";

export default function Signup({navigation}) {
  const [press, setPress] = useState(false);
  const [pressed, setPressed] = useState(false);
  return (
    <>
      <Text
        style={{
          marginTop: 35,
          marginLeft: 15,
          fontSize: 40,
          fontWeight: "bold",
        }}
      >
        Signup
      </Text>
      <Divider orientation="center" dashed={true}></Divider>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          <FontAwesome
            name="user-circle-o"
            size={100}
            color="grey"
            style={{}}
          />
        </View>
        <TextInput
          style={{
            borderWidth: 0.5,
            borderColor: "grey",
            paddingBottom: 8,
            paddingTop: 8,
            borderRadius: 5,
            marginTop: 30,
            paddingRight: 40,
            marginLeft: 25,
            marginRight: 25,
            paddingLeft: 10,
          }}
          placeholder="First Name"
        />
        <TextInput
          style={{
            borderWidth: 0.5,
            borderColor: "grey",
            paddingBottom: 8,
            paddingTop: 8,
            borderRadius: 5,
            marginTop: 30,
            paddingRight: 40,
            marginLeft: 25,
            marginRight: 25,
            paddingLeft: 10,
          }}
          placeholder="Last Name"
        />
        <TextInput
          style={{
            borderWidth: 0.5,
            borderColor: "grey",
            paddingBottom: 8,
            paddingTop: 8,
            borderRadius: 5,
            marginTop: 30,
            paddingRight: 40,
            marginLeft: 25,
            marginRight: 25,
            paddingLeft: 10,
          }}
          placeholder="Email Address"
        />
        <TextInput
          style={{
            borderWidth: 0.5,
            borderColor: "grey",
            paddingBottom: 8,
            paddingTop: 8,
            borderRadius: 5,
            marginTop: 30,
            paddingRight: 40,
            marginLeft: 25,
            marginRight: 25,
            paddingLeft: 10,
          }}
          placeholder="Home Name/No"
        />
        <TextInput
          style={{
            borderWidth: 0.5,
            borderColor: "grey",
            paddingBottom: 8,
            paddingTop: 8,
            borderRadius: 5,
            marginTop: 30,
            paddingRight: 40,
            marginLeft: 25,
            marginRight: 25,
            paddingLeft: 10,
          }}
          placeholder="Street"
        />
        <TextInput
          style={{
            borderWidth: 0.5,
            borderColor: "grey",
            paddingBottom: 8,
            paddingTop: 8,
            borderRadius: 5,
            marginTop: 30,
            paddingRight: 40,
            marginLeft: 25,
            marginRight: 25,
            paddingLeft: 10,
          }}
          placeholder="District"
        />
        <TextInput
          style={{
            borderWidth: 0.5,
            borderColor: "grey",
            paddingBottom: 8,
            paddingTop: 8,
            borderRadius: 5,
            marginTop: 30,
            paddingRight: 40,
            marginLeft: 25,
            marginRight: 25,
            paddingLeft: 10,
          }}
          placeholder="Postal Code"
        />
        <TextInput
          style={{
            borderWidth: 0.5,
            borderColor: "grey",
            paddingBottom: 8,
            paddingTop: 8,
            borderRadius: 5,
            marginTop: 30,
            paddingRight: 40,
            marginLeft: 25,
            marginRight: 25,
            paddingLeft: 10,
          }}
          placeholder="Telephone No"
        />
        <TextInput
          style={{
            borderWidth: 0.5,
            borderColor: "grey",
            paddingBottom: 8,
            paddingTop: 8,
            borderRadius: 5,
            marginTop: 30,
            paddingRight: 40,
            marginLeft: 25,
            marginRight: 25,
            paddingLeft: 10,
          }}
          placeholder="NIC "
        />
        <TextInput
          style={{
            borderWidth: 0.5,
            borderColor: "grey",
            paddingBottom: 8,
            paddingTop: 8,
            borderRadius: 5,
            marginTop: 30,
            paddingRight: 40,
            marginLeft: 25,
            marginRight: 25,
            paddingLeft: 10,
          }}
          placeholder="Driver licence(google drive upload link)"
        />
        <View
          style={{
            flexDirection: "row",
            borderWidth: 0.5,
            borderColor: "grey",
            paddingBottom: 8,
            paddingTop: 8,
            borderRadius: 5,
            marginTop: 30,
            paddingRight: 40,
            marginLeft: 25,
            marginRight: 25,
            paddingLeft: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput placeholder="Password" />
          <TouchableOpacity
            onPress={() => {
              setPress(!press);
            }}
          >
            <Ionicons
              name={press ? "eye-off-outline" : "eye-outline"}
              size={18}
              color={press ? "black" : "grey"}
              style={{
                marginLeft: 200,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 0.5,
            borderColor: "grey",
            paddingBottom: 8,
            paddingTop: 8,
            borderRadius: 5,
            marginTop: 30,
            paddingRight: 40,
            marginLeft: 25,
            marginRight: 25,
            paddingLeft: 10,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20
          }}
        >
          <TextInput placeholder="Confirm Password" />
          <TouchableOpacity
            onPress={() => {
              setPressed(!pressed);
            }}
          >
            <Ionicons
              name={pressed ? "eye-off-outline" : "eye-outline"}
              size={18}
              color={pressed ? "black" : "grey"}
              style={{
                marginLeft: 147,
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
          marginTop: 30,
          width: 100,
          alignSelf: "center",
          paddingBottom: 5,
          paddingTop: 5,
          marginBottom: 50
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
              fontSize: 24,
              color: "white",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      </ScrollView>
    </>
  );
}
