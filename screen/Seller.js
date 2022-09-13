import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function Seller({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "white",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          marginLeft: 10,
          marginTop: 30,
        }}
      >
        <Feather name="arrow-left" size={26} color="black" />
      </TouchableOpacity>
      <View
        style={{
          marginTop: 20,
          paddingLeft: 10,
        }}
      >
        <Text
          style={{
            fontSize: 19,
            fontWeight: "bold",
          }}
        >
          Total Sellers: ##
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
              marginTop: 30,
              marginRight: 30,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Seller ID
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginLeft: 30,
              }}
            >
              Title
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginLeft: 65,
                marginRight: 20,
              }}
            >
              Starting Price
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginLeft: 30,
              }}
            >
              Max bid
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginLeft: 30,
              }}
            >
              Time Duration
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginLeft: 30,
              }}
            >
              Approve Status
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginLeft: 30,
              }}
            >
              Remove or Edit
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "black",
              height: 1,
              marginTop: 10,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fecaca",
              paddingBottom: 10,
              paddingTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: "grey",
              // marginBottom: 10
            }}
          >
            <Text
              style={{
                fontSize: 16,
                marginLeft: 10,
                fontWeight: "bold",
              }}
            >
              1001
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 55,
              }}
            >
              Blue gem
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 30,
              }}
            >
              1000
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 115,
              }}
            >
              2500
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 57,
              }}
            >
              25 min
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 85,
              }}
            >
              Approved
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#ffedd5",
              paddingBottom: 10,
              paddingTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: 'grey'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                marginLeft: 10,
                fontWeight: "bold",
              }}
            >
              1001
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 55,
              }}
            >
              Blue gem
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 30,
              }}
            >
              1000
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 115,
              }}
            >
              2500
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 57,
              }}
            >
              25 min
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 85,
              }}
            >
              Approved
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fecaca",
              paddingBottom: 10,
              paddingTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: 'grey'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                marginLeft: 10,
                fontWeight: "bold",
              }}
            >
              1001
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 55,
              }}
            >
              Blue gem
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 30,
              }}
            >
              1000
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 115,
              }}
            >
              2500
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 57,
              }}
            >
              25 min
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 85,
              }}
            >
              Approved
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#ffedd5",
              paddingBottom: 10,
              paddingTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: "grey",
              // marginBottom: 10
            }}
          >
            <Text
              style={{
                fontSize: 16,
                marginLeft: 10,
                fontWeight: "bold",
              }}
            >
              1001
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 55,
              }}
            >
              Blue gem
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 30,
              }}
            >
              1000
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 115,
              }}
            >
              2500
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 57,
              }}
            >
              25 min
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 85,
              }}
            >
              Approved
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fecaca",
              paddingBottom: 10,
              paddingTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: 'grey'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                marginLeft: 10,
                fontWeight: "bold",
              }}
            >
              1001
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 55,
              }}
            >
              Blue gem
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 30,
              }}
            >
              1000
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 115,
              }}
            >
              2500
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 57,
              }}
            >
              25 min
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 85,
              }}
            >
              Approved
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#ffedd5",
              paddingBottom: 10,
              paddingTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: 'grey'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                marginLeft: 10,
                fontWeight: "bold",
              }}
            >
              1001
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 55,
              }}
            >
              Blue gem
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 30,
              }}
            >
              1000
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 115,
              }}
            >
              2500
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 57,
              }}
            >
              25 min
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 85,
              }}
            >
              Approved
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fecaca",
              paddingBottom: 10,
              paddingTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: 'grey'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                marginLeft: 10,
                fontWeight: "bold",
              }}
            >
              1001
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 55,
              }}
            >
              Blue gem
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 30,
              }}
            >
              1000
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 115,
              }}
            >
              2500
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 57,
              }}
            >
              25 min
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 85,
              }}
            >
              Approved
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#ffedd5",
              paddingBottom: 10,
              paddingTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: 'grey'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                marginLeft: 10,
                fontWeight: "bold",
              }}
            >
              1001
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 55,
              }}
            >
              Blue gem
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 30,
              }}
            >
              1000
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 115,
              }}
            >
              2500
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 57,
              }}
            >
              25 min
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 85,
              }}
            >
              Approved
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fecaca",
              paddingBottom: 10,
              paddingTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: 'grey'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                marginLeft: 10,
                fontWeight: "bold",
              }}
            >
              1001
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 55,
              }}
            >
              Blue gem
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 30,
              }}
            >
              1000
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 115,
              }}
            >
              2500
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 57,
              }}
            >
              25 min
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 85,
              }}
            >
              Approved
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#ffedd5",
              paddingBottom: 10,
              paddingTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: 'grey'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                marginLeft: 10,
                fontWeight: "bold",
              }}
            >
              1001
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 55,
              }}
            >
              Blue gem
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 30,
              }}
            >
              1000
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 115,
              }}
            >
              2500
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 57,
              }}
            >
              25 min
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 85,
              }}
            >
              Approved
            </Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}
