import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../Styles/Global";
import { Formik, yupToFormErrors } from "formik";
import * as yup from "yup";

const carSchema = yup.object({
  plate: yup.string().required().min(7),
  nickname: yup.string().required().min(3),
});

export default function AddCarForm(props) {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.desc}>Registerer nyt køretøj</Text>
      <Text style={styles.descUndertext}>
        Udfyld felterne nedenfor for at registrere et nyt køretøj
      </Text>

      <Formik
        initialValues={{ plate: "", nickname: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm;
          props.addCar(values);
        }}
        validationSchema={carSchema}
      >
        {(props) => (
          <View style={styles.form}>
            <Text style={styles.inputDesc}>Indtast nummerplade</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Nummerplade"
              onChangeText={props.handleChange("plate")}
              value={props.values.plate}
              onBlur={props.handleBlur("plate")}
            ></TextInput>
            <Text style={globalStyles.errorText}>
              {props.touched.plate && props.errors.plate}
            </Text>
            <Text style={styles.inputDesc}>Giv bilen et navn</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Giv bilen et navn"
              onChangeText={props.handleChange("nickname")}
              value={props.values.nickname}
              onBlur={props.handleBlur("nickname")}
            ></TextInput>
            <Text style={globalStyles.errorText}>
              {props.touched.nickname && props.errors.nickname}
            </Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={props.handleSubmit}
            >
              <Text style={styles.buttonText}>Registrer køretøj</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 60,
    flex: 1,
  },
  desc: {
    fontFamily: "lato-black",
    fontSize: 20,
    textAlign: "center",
  },
  descUndertext: {
    fontFamily: "lato-regular",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  form: {
    flex: 1,
    marginTop: 30,
  },
  addButton: {
    // position: "absolute",
    width: "100%",
    marginTop: 20,
    height: 50,
    bottom: 20,
    textAlign: "center",
    backgroundColor: "#0063Db",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontFamily: "lato-black",
  },
  inputDesc: {
    fontSize: 18,
    fontFamily: "lato-bold",
    marginBottom: 5,
  },
});
