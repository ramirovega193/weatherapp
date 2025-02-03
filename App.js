import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { ImageBackground } from "react-native-web";
const Alerta = require("./assets/Fondos/despejado.jpg");
const imagen = require("./assets/Alertas/AlertaRayo.svg");
export default function App() {
  const [icon, setIcon] = useState("sun");
  const [image, setImage] = useState(Alerta);
  const [alert, setAlert] = useState(imagen);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.settings}>
        <Feather name="settings" size={40} color="white" />
      </View>

      <ImageBackground
        source={image}
        style={styles.principal}
        imageStyle={{ resizeMode: "strech", marginTop: -250 }}
      >
        <Feather name={icon} size={72} color="#ffc106" />
        <Text style={styles.principalTexto}>99º</Text>
        <Text style={styles.principalTextoSecundario}>
          <span style={styles.rojo}>99º</span> -
          <span style={styles.azul}> 0º</span>
        </Text>
      </ImageBackground>
      <View style={styles.bajada}>
        <View style={styles.bajadaCaja}>
          <Text style={styles.blanco}>Humedad</Text>
          <Text style={styles.blanco}>99%</Text>
        </View>
        <View style={styles.bajadaCaja}>
          <Text style={styles.blanco}>Presión</Text>
          <Text style={styles.blanco}>1100hPa</Text>
        </View>
      </View>
      <View style={styles.bajada}>
        <Image source={alert} style={styles.alertas} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: "10px",
    alignItems: "center",
  },
  settings: {
    backgroundColor: "#555555",
    padding: "7px",
    borderRadius: "10px",
    width: "min-content",
    alignSelf: "flex-end",
  },
  principal: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    paddingTop: 50,
    paddingBottom: 50,
    width: 300,
    overflow: "hidden",
  },
  principalTexto: {
    fontSize: "64px",
  },
  principalTextoSecundario: {
    fontSize: "36px",
  },
  rojo: {
    color: "#AD0000",
  },
  azul: {
    color: "#007A8F",
  },
  bajada: {
    backgroundColor: "#333333",
    width: 300,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    alignItems: "center",
    padding: 20,
  },
  bajadaCaja: {
    backgroundColor: "#555555",
    width: "50%",
    padding: 20,
    borderRadius: 40,
    textAlign: "center",
  },
  blanco: {
    color: "#FFF",
    fontSize: 20,
    textAlign: "center",
  },
  alertas: {
    width: 295,
    resizeMode: "stretch",
  },
});
