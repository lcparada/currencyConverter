import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useState } from "react";

import styles from "./styles";

import { Picker } from "@react-native-picker/picker";

import { BlurView } from "expo-blur";

import { Feather } from "@expo/vector-icons";

import api from "../services/api";

export default function Home() {
  const [selectedCoinConvert, setSelectedCoinConvert] = useState<string>("USD");
  const [selectedCoinConverted, setSelectedCoinConverted] =
    useState<string>("BRL");

  const [valueToConverter, setValueToConverter] = useState("");
  const [resultadoCount, setResultadoCount] = useState<string>("");
  const [error, setError] = useState("");

  const [openModal, setOpenModal] = useState<boolean>(false);

  const paramConverter = `${selectedCoinConvert}_${selectedCoinConverted}`;

  async function receiveData(): Promise<number> {
    const response = await api.get(
      `${paramConverter}?token=3098|0y0FFZ7DlkmaI5fvAfnLrBJTRkJwOzPM`
    );
    return response.data[paramConverter].price;
  }

  async function converter() {
    if (valueToConverter === null || valueToConverter === "") {
      setError("Deve ser preenchido algum valor");
    } else if (isNaN(Number(resultadoCount))) {
      setError("Valor nao suportado");
    } else {
      const value = await receiveData();
      setResultadoCount((value * Number(valueToConverter)).toFixed(2));
      setOpenModal(!openModal);
    }
  }

  function clearAll() {
    setOpenModal(!openModal);
    setValueToConverter("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerMainText}>
        <Text style={styles.mainText}>💸 Conversor 💸</Text>
      </View>

      <View style={styles.containerChooseCoins}>
        <Picker
          style={{ width: 122 }}
          mode="dropdown"
          selectedValue={selectedCoinConvert}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCoinConvert(itemValue)
          }
        >
          <Picker.Item label="USD" value="USD" />
          <Picker.Item label="EUR" value="EUR" />
          <Picker.Item label="BRL" value="BRL" />
        </Picker>

        <Feather name="arrow-right" size={24} color="#5DA271" />

        <Picker
          style={{ width: 122 }}
          mode="dropdown"
          selectedValue={selectedCoinConverted}
          onValueChange={setSelectedCoinConverted}
        >
          <Picker.Item label="USD" value="USD" />
          <Picker.Item label="EUR" value="EUR" />
          <Picker.Item label="BRL" value="BRL" />
        </Picker>
      </View>

      <View style={styles.inputValue}>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          cursorColor={"black"}
          placeholder="0.00"
          value={valueToConverter}
          onChangeText={setValueToConverter}
        ></TextInput>
        <Text style={styles.error}>{error}</Text>
      </View>

      <View style={styles.containerButtonConverter}>
        <TouchableOpacity style={styles.buttonConverter} onPress={converter}>
          <Text style={styles.textConverter}>Converter</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="fade" visible={openModal} transparent={true}>
        <BlurView intensity={110} tint="light" style={{ flex: 1 }}>
          <SafeAreaView style={styles.container}>
            <View style={styles.containerMainTextModal}>
              <Text style={styles.mainTextModal}>
                {" "}
                O resultado da conversão é:
              </Text>
            </View>
            <Text style={styles.result}>
              {resultadoCount} {selectedCoinConverted}
            </Text>

            <View style={styles.containerButtonConverter}>
              <TouchableOpacity
                style={styles.buttonConverter}
                onPress={clearAll}
              >
                <Text style={styles.textConverter}>Calcular novamente</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </BlurView>
      </Modal>
    </SafeAreaView>
  );
}
