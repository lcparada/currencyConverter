import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerMainText: {
    marginBottom: 20,
  },
  mainText: {
    fontSize: 30,
    fontFamily: "Lexend_700Bold",
    color: "#5DA271",
  },
  containerChooseCoins: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
  },
  inputValue: {
    marginTop: 10,
    alignItems: "center",
  },
  error: {
    color: "red",
    fontSize: 12,
    fontFamily: "Lexend_400Regular",
  },
  input: {
    width: 200,
    height: 40,
    // backgroundColor: "#F5F7F9",
    borderRadius: 15,
    paddingLeft: 20,
    fontFamily: "Lexend_400Regular",
    borderColor: "#5DA271",
    borderWidth: 2,
  },
  containerButtonConverter: {
    marginTop: 30,
  },
  buttonConverter: {
    width: 330,
    height: 60,
    backgroundColor: "#5DA271",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textConverter: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Lexend_700Bold",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  containerMainTextModal: {},
  mainTextModal: {
    fontSize: 20,
    fontFamily: "Lexend_700Bold",
  },
  result: {
    marginTop: 10,
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
