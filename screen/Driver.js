import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const dark = "#fecaca";

const light = "#ffedd5";

export default function Driver({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
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
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
          }}
        >
          Total Drivers: ##
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ScrollView style={{
            marginBottom: 10
        }}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Driver {"\n"}ID
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 30,
              }}
            >
              Gem {"\n"}Type
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 50,
              }}
            >
              Gem {"\n"}Amount
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 50,
              }}
            >
              Start {"\n"}data/time
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 60,
              }}
            >
              Driving {"\n"}status
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 50,
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 40,
              }}
            >
              Tracking {"\n"}Details
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 70,
              }}
            >
              Seller {"\n"}ID
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 60,
              }}
            >
              Buyer {"\n"}ID
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 60,
              }}
            >
              Remove or {"\n"}Edit Bit
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 60,
              }}
            >
              Remove or {"\n"}Edit Buyer
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 60,
              }}
            >
              Registration {"\n"}Approval Status
            </Text>
          </View>
            <View style={{
                backgroundColor: 'black',
                height: 2,
                marginTop: 10
            }}></View>
            <View style={{
                flexDirection: 'row',
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#fecaca",
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'grey'
            }}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: 'bold'
                }}>401</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>Blue {'\n'}gem</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>25000</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>08/02/2022 {'\n'}08.46 p.m</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 41
                }}>Now {'\n'}Driving</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 63
                }}>No. 05 {'\n'}Matara</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>LK3257R (By {'\n'}Van)</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 35
                }}>1001</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 80
                }}>5001</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#ffedd5",
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'grey'
            }}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: 'bold'
                }}>401</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>Blue {'\n'}gem</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>25000</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>08/02/2022 {'\n'}08.46 p.m</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 41
                }}>Now {'\n'}Driving</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 63
                }}>No. 05 {'\n'}Matara</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>LK3257R (By {'\n'}Van)</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 35
                }}>1001</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 80
                }}>5001</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#fecaca",
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'grey'
            }}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: 'bold'
                }}>401</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>Blue {'\n'}gem</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>25000</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>08/02/2022 {'\n'}08.46 p.m</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 41
                }}>Now {'\n'}Driving</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 63
                }}>No. 05 {'\n'}Matara</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>LK3257R (By {'\n'}Van)</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 35
                }}>1001</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 80
                }}>5001</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#ffedd5",
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'grey'
            }}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: 'bold'
                }}>401</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>Blue {'\n'}gem</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>25000</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>08/02/2022 {'\n'}08.46 p.m</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 41
                }}>Now {'\n'}Driving</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 63
                }}>No. 05 {'\n'}Matara</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>LK3257R (By {'\n'}Van)</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 35
                }}>1001</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 80
                }}>5001</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#fecaca",
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'grey'
            }}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: 'bold'
                }}>401</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>Blue {'\n'}gem</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>25000</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>08/02/2022 {'\n'}08.46 p.m</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 41
                }}>Now {'\n'}Driving</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 63
                }}>No. 05 {'\n'}Matara</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>LK3257R (By {'\n'}Van)</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 35
                }}>1001</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 80
                }}>5001</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#ffedd5",
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'grey'
            }}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: 'bold'
                }}>401</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>Blue {'\n'}gem</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>25000</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>08/02/2022 {'\n'}08.46 p.m</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 41
                }}>Now {'\n'}Driving</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 63
                }}>No. 05 {'\n'}Matara</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>LK3257R (By {'\n'}Van)</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 35
                }}>1001</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 80
                }}>5001</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#fecaca",
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'grey'
            }}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: 'bold'
                }}>401</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>Blue {'\n'}gem</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>25000</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>08/02/2022 {'\n'}08.46 p.m</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 41
                }}>Now {'\n'}Driving</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 63
                }}>No. 05 {'\n'}Matara</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>LK3257R (By {'\n'}Van)</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 35
                }}>1001</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 80
                }}>5001</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#ffedd5",
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'grey'
            }}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: 'bold'
                }}>401</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>Blue {'\n'}gem</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>25000</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>08/02/2022 {'\n'}08.46 p.m</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 41
                }}>Now {'\n'}Driving</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 63
                }}>No. 05 {'\n'}Matara</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>LK3257R (By {'\n'}Van)</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 35
                }}>1001</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 80
                }}>5001</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#fecaca",
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'grey'
            }}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: 'bold'
                }}>401</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>Blue {'\n'}gem</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>25000</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>08/02/2022 {'\n'}08.46 p.m</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 41
                }}>Now {'\n'}Driving</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 63
                }}>No. 05 {'\n'}Matara</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>LK3257R (By {'\n'}Van)</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 35
                }}>1001</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 80
                }}>5001</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#ffedd5",
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: 'bold'
                }}>401</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>Blue {'\n'}gem</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 60
                }}>25000</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>08/02/2022 {'\n'}08.46 p.m</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 41
                }}>Now {'\n'}Driving</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 63
                }}>No. 05 {'\n'}Matara</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 70
                }}>LK3257R (By {'\n'}Van)</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 35
                }}>1001</Text>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 80,
                }}>5001</Text>
            </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}
