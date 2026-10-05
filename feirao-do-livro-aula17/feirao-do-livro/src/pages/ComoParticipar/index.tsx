import React from "react";
import { Text, View } from "react-native";

import Botao from "../../components/Botao";
import { styles } from "./styles";

const etapas = [
  "Escolha um livro disponível no acervo.",
  "Traga um livro em bom estado para a troca.",
  "Combine a troca e aproveite sua nova leitura.",
];

export default function ComoParticipar({ navigation }) {
  return (
    <View style={styles.container}>
      <Botao texto="Voltar" aoPressionar={() => navigation.goBack()} />
      <Text style={styles.titulo}>Como participar</Text>
      {etapas.map((etapa, index) => (
        <View key={etapa} style={styles.etapa}>
          <Text style={styles.numero}>{index + 1}.</Text>
          <Text style={styles.texto}>{etapa}</Text>
        </View>
      ))}
    </View>
  );
}
