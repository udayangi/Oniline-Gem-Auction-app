import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const items = [
  {
    image: require("../picture/green.jpeg"),
  },
  {
    image: require("../picture/yellow.jpeg"),
  },
  {
    image: require("../picture/lightpurple.jpeg"),
  },
  {
    image: require("../picture/blue.jpeg"),
  },
  {
    image: require("../picture/black.jpeg"),
  },
  {
    image: require("../picture/purple.jpeg"),
  },
  {
    image: require("../picture/blue1.jpeg"),
  },
  {
    image: require("../picture/yellow1.jpeg"),
  },
];

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar style="transparent" />
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          style={{
            paddingLeft: 20,
            marginTop: 30
          }}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="md-reorder-three-outline" size={37} color="black" />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AddGems />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                }}
              >
                Alexandrite
              </Text>
              <Text
                style={{
                  marginLeft: 49,
                  fontSize: 22,
                }}
              >
                Green
              </Text>
            </View>
            <View
              style={{
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                }}
              >
                Yellow Gem
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  marginLeft: 50,
                }}
              >
                Yellow
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={items[0].image}
              style={{
                height: 190,
                width: 190,

                resizeMode: "contain",
              }}
            />

            <Image
              source={items[1].image}
              style={{
                height: 150,
                width: 150,
                marginLeft: 10,

                resizeMode: "contain",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
              marginBottom: 22,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Alexandrite")}
            >
              <Text
                style={{
                  backgroundColor: "#2563eb",
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  marginLeft: 60,
                  color: "white",
                  borderRadius: 5,
                  fontSize: 16,
                }}
              >
                View
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Yellow")}>
              <Text
                style={{
                  backgroundColor: "#2563eb",
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  marginLeft: 110,
                  color: "white",
                  borderRadius: 5,
                  fontSize: 16,
                }}
              >
                View
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                }}
              >
                Blue Gem
              </Text>
              <Text
                style={{
                  marginLeft: 49,
                  fontSize: 22,
                }}
              >
                Blue
              </Text>
            </View>
            <View
              style={{
                marginLeft: 50,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                }}
              >
                Blue Gem
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  marginLeft: 50,
                }}
              >
                Blue
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Image
              source={items[2].image}
              style={{
                height: 160,
                width: 160,
                marginLeft: 20,
                resizeMode: "contain",
              }}
            />

            <Image
              source={items[3].image}
              style={{
                height: 160,
                width: 170,
                marginLeft: 10,
                // resizeMode: "contain",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
              marginBottom: 22,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Lightpurple")}
            >
              <Text
                style={{
                  backgroundColor: "#2563eb",
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  marginLeft: 60,
                  color: "white",
                  borderRadius: 5,
                  fontSize: 16,
                }}
              >
                View
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Blue")}>
              <Text
                style={{
                  backgroundColor: "#2563eb",
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  marginLeft: 110,
                  color: "white",
                  borderRadius: 5,
                  fontSize: 16,
                }}
              >
                View
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                }}
              >
                Amethyst
              </Text>
              <Text
                style={{
                  marginLeft: 49,
                  fontSize: 22,
                }}
              >
                Black
              </Text>
            </View>
            <View
              style={{
                marginLeft: 50,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                }}
              >
                Purple Gem
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  marginLeft: 50,
                }}
              >
                Purple
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Image
              source={items[4].image}
              style={{
                height: 160,
                width: 160,
                marginLeft: 20,
                resizeMode: "contain",
              }}
            />

            <Image
              source={items[5].image}
              style={{
                height: 160,
                width: 160,
                marginLeft: 20,
                resizeMode: "contain",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
              marginBottom: 22,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Black")}>
              <Text
                style={{
                  backgroundColor: "#2563eb",
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  marginLeft: 60,
                  color: "white",
                  borderRadius: 5,
                  fontSize: 16,
                }}
              >
                View
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Purple")}>
              <Text
                style={{
                  backgroundColor: "#2563eb",
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  marginLeft: 110,
                  color: "white",
                  borderRadius: 5,
                  fontSize: 16,
                }}
              >
                View
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                }}
              >
                Amethyst
              </Text>
              <Text
                style={{
                  marginLeft: 49,
                  fontSize: 22,
                }}
              >
                Blue
              </Text>
            </View>
            <View
              style={{
                marginLeft: 50,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                }}
              >
                Yellow Gem
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  marginLeft: 50,
                }}
              >
                Yellow
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Image
              source={items[6].image}
              style={{
                height: 140,
                width: 140,
                marginLeft: 20,
                resizeMode: "contain",
              }}
            />

            <Image
              source={items[1].image}
              style={{
                height: 160,
                width: 160,
                marginLeft: 40,
                resizeMode: "contain",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
              marginBottom: 22,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Blue1")}>
              <Text
                style={{
                  backgroundColor: "#2563eb",
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  marginLeft: 60,
                  color: "white",
                  borderRadius: 5,
                  fontSize: 16,
                }}
              >
                View
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Yellow1")}>
              <Text
                style={{
                  backgroundColor: "#2563eb",
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  marginLeft: 110,
                  color: "white",
                  borderRadius: 5,
                  fontSize: 16,
                }}
              >
                View
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const AddGems = () => (
  <View
    style={{
      marginTop: 10,
      marginBottom: 10,
      paddingBottom: 10,
      paddingTop: 10,
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <View
      style={{
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#eee",
        paddingBottom: 6,
        paddingTop: 6,
        paddingLeft: 15,
        marginLeft: 10,
        marginRight: 19,
        paddingHorizontal: 100,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <AntDesign name="search1" size={18} color="grey" />
      <TextInput
        style={{
          paddingLeft: 15,
        }}
        placeholder="input search text"
      />
    </View>
    <TouchableOpacity
      style={{
        backgroundColor: "#06b6d4",
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 7,
        paddingLeft: 7,
        borderRadius: 4,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        Add Gem
      </Text>
    </TouchableOpacity>
  </View>
);
