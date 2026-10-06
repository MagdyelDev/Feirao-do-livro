import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: "#f5efe6",
  },
  capa: {
    width: 180,
    height: 230,
    marginTop: 18,
    marginBottom: 20,
    alignSelf: "center",
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#203a2f",
    borderRadius: 24,
    boxShadow: "0px 10px 18px rgba(15, 23, 42, 0.15)",
    elevation: 6,
  },
  capaTexto: {
    color: "#fffaf3",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 30,
  },
  titulo: {
    color: "#1f2937",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 10,
  },
  texto: {
    marginTop: 8,
    color: "#475569",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
});
