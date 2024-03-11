import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../../../assets/logo.png";

export default function Topo() {
  return (
    <View style={estilos.topo}>
      <Image source={logo} style={estilos.image} />
      <Text style={estilos.boasVindas}>Olá Usuário</Text>
      <Text style={estilos.legenda}>Encontre os melhores produtores</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: "#F6F6F6",
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});