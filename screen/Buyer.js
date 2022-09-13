import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Buyer({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <TouchableOpacity
        style={{
          marginLeft: 10,
          marginTop: 30,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <AntDesign name="arrowleft" size={26} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          fontSize: 20,
        }}
      >
        Total Buyers: ##
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
              marginTop: 20,
              marginRight: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Buyer ID
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 30,
              }}
            >
              Title
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 85,
              }}
            >
              Input Bid
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 40,
              }}
            >
              Bidding data/time
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 80,
              }}
            >
              Winner status
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 30,
              }}
            >
              Remove or Edit Bid
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 30,
              }}
            >
              Remove or Edit buyer
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 30,
              }}
            >
              registration Approval Status
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "black",
              height: 2,
              marginTop: 9,
            }}
          ></View>
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#fecaca',
            paddingBottom: 10,
            paddingLeft: 10,
            paddingTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'grey'
          }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',

            }}>5001</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 60
            }}>Blue gem</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 40
            }}>25000</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 63
            }}>08/02/2002 08.46 p.m</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 43
            }}>Win</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#ffedd5',
            paddingBottom: 10,
            paddingLeft: 10,
            paddingTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'grey'
          }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',

            }}>5001</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 60
            }}>Blue gem</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 40
            }}>25000</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 63
            }}>08/02/2002 08.46 p.m</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 43
            }}>Win</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#fecaca',
            paddingBottom: 10,
            paddingLeft: 10,
            paddingTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'grey'
          }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',

            }}>5001</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 60
            }}>Blue gem</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 40
            }}>25000</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 63
            }}>08/02/2002 08.46 p.m</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 43
            }}>Win</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#ffedd5',
            paddingBottom: 10,
            paddingLeft: 10,
            paddingTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'grey'
          }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',

            }}>5001</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 60
            }}>Blue gem</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 40
            }}>25000</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 63
            }}>08/02/2002 08.46 p.m</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 43
            }}>Win</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#fecaca',
            paddingBottom: 10,
            paddingLeft: 10,
            paddingTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'grey'
          }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',

            }}>5001</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 60
            }}>Blue gem</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 40
            }}>25000</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 63
            }}>08/02/2002 08.46 p.m</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 43
            }}>Win</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#ffedd5',
            paddingBottom: 10,
            paddingLeft: 10,
            paddingTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'grey'
          }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',

            }}>5001</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 60
            }}>Blue gem</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 40
            }}>25000</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 63
            }}>08/02/2002 08.46 p.m</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 43
            }}>Win</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#fecaca',
            paddingBottom: 10,
            paddingLeft: 10,
            paddingTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'grey'
          }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',

            }}>5001</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 60
            }}>Blue gem</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 40
            }}>25000</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 63
            }}>08/02/2002 08.46 p.m</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 43
            }}>Win</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#ffedd5',
            paddingBottom: 10,
            paddingLeft: 10,
            paddingTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'grey'
          }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',

            }}>5001</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 60
            }}>Blue gem</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 40
            }}>25000</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 63
            }}>08/02/2002 08.46 p.m</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 43
            }}>Win</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#fecaca',
            paddingBottom: 10,
            paddingLeft: 10,
            paddingTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'grey'
          }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',

            }}>5001</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 60
            }}>Blue gem</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 40
            }}>25000</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 63
            }}>08/02/2002 08.46 p.m</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 43
            }}>Win</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#ffedd5',
            paddingBottom: 10,
            paddingLeft: 10,
            paddingTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'grey'
          }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',

            }}>5001</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 60
            }}>Blue gem</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 40
            }}>25000</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 63
            }}>08/02/2002 08.46 p.m</Text>
            <Text style={{
                fontSize: 18,
                marginLeft: 43
            }}>Win</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}
