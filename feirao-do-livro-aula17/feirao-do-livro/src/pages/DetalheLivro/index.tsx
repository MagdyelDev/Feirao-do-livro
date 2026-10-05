import React from "react";
import { Text, View } from "react-native";

import Botao from "../../components/Botao";
import { styles } from "./styles";

export default function DetalheLivro({ navigation, route }) {
  const livro = route.params?.livro;

  return (
    <View style={styles.container}>
      <Botao texto="Voltar" aoPressionar={() => navigation.goBack()} />
      <View style={styles.capa}>
        <Text style={styles.capaTexto}>{livro?.titulo ?? "Capa do livro"}</Text>
      </View>
      <Text style={styles.titulo}>{livro?.titulo ?? "Livro"}</Text>
      <Text style={styles.texto}>Autor: {livro?.autor ?? "Não informado"}</Text>
      <Text style={styles.texto}>Modalidade: {livro?.modalidade ?? "Troca"}</Text>
    </View>
  );
}
