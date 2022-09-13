import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import RBSheet from "react-native-raw-bottom-sheet";

const items = [
  {
    image: require("../picture/yellow.jpeg"),
  },
];

export default function Yellow({ navigation }) {
  const [isPressed, setPressed] = useState(false);
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}
    >
      {/* <LinearGradient
        colors={["white", "#fbbf24"]}
        locations={[0, 1]}
        start={{ x: 0.3, y: 0.2 }}
        end={{ x: 1.2, y: 0.6 }}
        style={{
          paddingTop: 30,
          flex: 1,
        }}
      > */}
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Feather
            name="arrow-left"
            size={24}
            color="black"
            style={{
              marginLeft: 17,
              marginBottom: 10,
              marginTop: 30
            }}
          />
        </TouchableOpacity>
        <Image
          source={items[0].image}
          style={{
            height: 300,
            width: 370,
            resizeMode: "cover",
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setPressed(!isPressed);
          }}
        >
          <AntDesign
            name={isPressed ? "heart" : "hearto"}
            size={24}
            color={isPressed ? "red" : "grey"}
            style={{
              marginLeft: "86%",
              marginTop: 20,
            }}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginLeft: 21,
            }}
          >
            Yellow Gem
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 12,
              marginLeft: 21,
            }}
          >
            Yellow
          </Text>
        </View>
        <Text
          style={{
            marginTop: 20,
            margin: 21,
            fontSize: 16,
            color: "black",
            fontWeight: "bold",
          }}
        >
          From bright, sunny colors to deep golden hues, yellow gemstones are
          warm and inviting. If you’re looking for a yellow gem for your next
          jewelry project, you’ll find what you’re looking for here. Learn about
          color and quality for yellow gemstones, which ones will hold up best
          as ring stones, and which should be kept safe in a gem collection.
          Weight -50g height-10.45mm
        </Text>

        <View
          style={{
            backgroundColor: "#eee",
            height: 1,
            marginTop: 10,
            marginBottom: 10,
          }}
        ></View>
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            marginLeft: 20,
            marginRight: 230,
            paddingBottom: 15,
            paddingTop: 15,
            paddingLeft: 13,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Max Bid: 5
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            marginLeft: 20,
            marginRight: 190,
            paddingBottom: 15,
            paddingTop: 15,
            paddingLeft: 13,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Hurry Up Bid Soon
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.RBSheet.open()}>
          <RBSheet
            ref={(ref) => {
              this.RBSheet = ref;
            }}
            closeOnDragDown={true}
            closeOnPressMask={true}
            height={335}
            openDuration={250}
            dragFromTopOnly={false}
            customStyles={{
              container: {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 17,
              },
              wrapper: {},
              draggableIcon: {
                marginTop: -60,
                height: 4,
              },
            }}
          >
            <AntDesign name="cloudupload" size={90} color="black" />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    borderWidth: 1,
                    backgroundColor: "white",
                    paddingBottom: 10,
                    paddingTop: 10,
                    paddingHorizontal: 20,
                    backgroundColor: "#eee",
                    fontSize: 17,
                    borderRadius: 4,
                  }}
                >
                  Choose File
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  marginLeft: 10,
                }}
              >
                No file chosen
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "#0284c7",
                paddingHorizontal: 30,
                paddingBottom: 7,
                paddingTop: 7,
                marginTop: 10,
                marginRight: 55,
                borderRadius: 3,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </RBSheet>
          <Text
            style={{
              backgroundColor: "blue",
              marginLeft: 20,
              marginRight: 190,
              paddingBottom: 15,
              paddingTop: 15,
              paddingLeft: 13,
              marginBottom: 20,
              color: "white",
            }}
          >
            Add Doc
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {/* </LinearGradient> */}
    </View>
  );
}
