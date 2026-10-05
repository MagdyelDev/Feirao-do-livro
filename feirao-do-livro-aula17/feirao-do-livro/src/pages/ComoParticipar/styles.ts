import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  titulo: {
    marginTop: 24,
    marginBottom: 12,
    color: "#0f172a",
    fontSize: 26,
    fontWeight: "bold",
  },
  etapa: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  numero: {
    width: 28,
    color: "#0f172a",
    fontSize: 18,
    fontWeight: "bold",
  },
  texto: {
    flex: 1,
    color: "#334155",
    fontSize: 16,
    lineHeight: 24,
  },
});
