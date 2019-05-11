import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ExpandableView = ({
  showText,
  hiddenText,
  show = false,
  children,
  onPress = () => {}
}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => onPress(!show)}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[style.title, { textDecorationLine: "underline" }]}>
            {show ? showText : hiddenText}
          </Text>
          <Text style={{ fontSize: 24, marginHorizontal: 4, marginBottom: 3 }}>
            {show ? "-" : "+"}
          </Text>
        </View>
      </TouchableOpacity>
      {show ? children : null}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 5
  },
  title: {
    fontSize: 17,
    color: "black"
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    color: "black"
  }
});
export default ExpandableView;
