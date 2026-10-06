import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: "#f5efe6",
  },

  banner: {
    paddingVertical: 36,
    paddingHorizontal: 20,
    borderRadius: 26,
    backgroundColor: "#203a2f",
    alignItems: "center",
    marginBottom: 22,
    boxShadow: "0px 10px 18px rgba(15, 23, 42, 0.18)",
    elevation: 6,
  },

  bannerTitulo: {
    fontSize: 32,
    fontWeight: "800",
    color: "#fffaf3",
    textAlign: "center",
    letterSpacing: 1.8,
    lineHeight: 38,
  },

  bannerTexto: {
    fontSize: 16,
    color: "#dfe8d7",
    marginTop: 10,
    textAlign: "center",
  },
});
