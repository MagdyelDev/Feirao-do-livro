import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  titulo: {
    marginTop: 20,
    marginBottom: 8,
    fontSize: 26,
    fontWeight: "bold",
    color: "#0f172a",
  },
  livro: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  capa: {
    width: 64,
    height: 82,
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e2e8f0",
    borderRadius: 4,
  },
  capaTexto: {
    color: "#0f172a",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  informacoes: {
    flex: 1,
    marginLeft: 14,
  },
  livroTitulo: {
    color: "#0f172a",
    fontSize: 17,
    fontWeight: "bold",
  },
  texto: {
    marginTop: 4,
    color: "#334155",
    fontSize: 14,
  },
  modalidade: {
    alignSelf: "flex-start",
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    backgroundColor: "#e2e8f0",
    color: "#334155",
    fontSize: 12,
  },
});
