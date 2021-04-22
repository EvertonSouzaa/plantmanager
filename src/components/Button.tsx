import React from "react";
import { TouchableOpacity, StyleSheet, TouchableOpacityProps, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import colors from "../styles/colors"


interface ButtonProps extends TouchableOpacityProps {
  title: string;

}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.5} {...rest}>
      <Text style={styles.btnText}> {title} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  btnText: {
    color: colors.white,
    fontSize: 24
  }
})