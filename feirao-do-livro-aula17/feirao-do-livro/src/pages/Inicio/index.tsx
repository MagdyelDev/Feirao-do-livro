import React from "react";
import { Text, View } from "react-native";

import Botao from "../../components/Botao";
import { styles } from "./styles";

export default function Inicio(props) {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerTitulo}>FEIRÃO{"\n"}DO LIVRO</Text>
        <Text style={styles.bannerTexto}>Doe, troque e descubra livros.</Text>
      </View>

      <Botao texto="Ver acervo" aoPressionar={() => props.navigation.navigate("Acervo")} />
      <Botao texto="Como participar" aoPressionar={() => props.navigation.navigate("ComoParticipar")} />
    </View>
  );
}
