import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import Entypo from "@expo/vector-icons/Entypo";
import React, { useState } from "react";

import ExpenseForm from "@/components/ExpenseForm";

export default function HomeScreen() {
  const [isFormVisible, updateFormVisibility] = useState(false);
  const [isPlusIconVisible, updatePlusIconVisibility] = useState(true);

  const hideFormAndDisplayPlusIcon = () => {
    updateFormVisibility(false);
    updatePlusIconVisibility(true);
  };

  return (
    <View style={styles.Container}>
      <ImageBackground
        source={require("@/assets/images/desert.jpeg")}
        style={styles.BackgroundImage}
      >
        {isFormVisible ? (
          <ExpenseForm onClose={hideFormAndDisplayPlusIcon}></ExpenseForm>
        ) : (
          <Text>" "</Text>
        )}

        {isPlusIconVisible ? (
          <TouchableOpacity
            style={styles.ButtonContainer}
            onPress={() => {
              updatePlusIconVisibility(false);
              updateFormVisibility(true);
            }}
          >
            <View style={styles.AddIconContainer}>
              <Entypo name="add-to-list" size={40} color="white" />
            </View>
          </TouchableOpacity>
        ) : (
          <Text>" "</Text>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
  },
  BackgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  AddIconContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "transparent",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  ButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  Title: {
    textAlign: "center",
    color: "white",
    fontSize: 26,
    position: "absolute",
    top: 30,
  },
});
