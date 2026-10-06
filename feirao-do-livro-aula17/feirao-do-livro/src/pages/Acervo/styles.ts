import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: "#f5efe6",
  },
  titulo: {
    marginTop: 20,
    marginBottom: 18,
    fontSize: 30,
    fontWeight: "800",
    color: "#1f2937",
  },
  livro: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 18,
    backgroundColor: "#fffdfb",
    marginBottom: 14,
    boxShadow: "0px 6px 14px rgba(31, 41, 55, 0.08)",
    elevation: 3,
  },
  capa: {
    width: 76,
    height: 96,
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efe1bd",
    borderRadius: 14,
  },
  capaTexto: {
    color: "#203a2f",
    fontSize: 11,
    fontWeight: "800",
    textAlign: "center",
  },
  informacoes: {
    flex: 1,
    marginLeft: 14,
  },
  livroTitulo: {
    color: "#1f2937",
    fontSize: 18,
    fontWeight: "700",
  },
  texto: {
    marginTop: 4,
    color: "#475569",
    fontSize: 14,
  },
  modalidade: {
    alignSelf: "flex-start",
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: "#e8f3ea",
    color: "#203a2f",
    fontSize: 12,
    fontWeight: "700",
  },
});
