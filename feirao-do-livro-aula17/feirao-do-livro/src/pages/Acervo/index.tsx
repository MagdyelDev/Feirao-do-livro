import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import Botao from "../../components/Botao";
import { styles } from "./styles";

const livros = [
  { id: 1, titulo: "Vidas Secas", autor: "Graciliano Ramos", modalidade: "Troca" },
  { id: 2, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", modalidade: "Troca" },
  { id: 3, titulo: "A Bolsa Amarela", autor: "Lygia Bojunga", modalidade: "Troca" },
  { id: 4, titulo: "Meu Pé de Laranja Lima", autor: "José Mauro de Vasconcelos", modalidade: "Troca" },
  { id: 5, titulo: "O Menino do Dedo Verde", autor: "Maurice Druon", modalidade: "Troca" },
];

export default function Acervo({ navigation }) {
  return (
    <View style={styles.container}>
      <Botao texto="Voltar" aoPressionar={() => navigation.goBack()} />
      <Text style={styles.titulo}>Acervo</Text>
      <FlatList
        data={livros}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.livro}
            onPress={() => navigation.navigate("DetalheLivro", { livro: item })}
          >
            <View style={styles.capa}>
              <Text style={styles.capaTexto}>{item.titulo}</Text>
            </View>
            <View style={styles.informacoes}>
              <Text style={styles.livroTitulo}>{item.titulo}</Text>
              <Text style={styles.texto}>{item.autor}</Text>
              <Text style={styles.modalidade}>{item.modalidade}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
