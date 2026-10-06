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
    marginTop: 18,
    marginBottom: 16,
    color: "#1f2937",
    fontSize: 30,
    fontWeight: "800",
  },
  etapa: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 16,
    backgroundColor: "#fffdfb",
    borderRadius: 18,
    marginBottom: 12,
    boxShadow: "0px 6px 14px rgba(31, 41, 55, 0.08)",
    elevation: 3,
  },
  numero: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#d97706",
    color: "#fffaf5",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 32,
    marginRight: 12,
  },
  texto: {
    flex: 1,
    color: "#475569",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
});
