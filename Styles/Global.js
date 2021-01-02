import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopColor: "#898989",
    borderTopWidth: 2,
  },
  titleText: {
    fontSize: 22,
    fontFamily: "lato-black",
    color: "#433",
  },
  pText: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    // borderWidth: 2,
    backgroundColor: "#dadada",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
    minHeight: 50,
    paddingTop: 10,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "capitalize",
  },
  desc: {
    fontFamily: "lato-black",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
});
