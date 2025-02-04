import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useState } from "react";
import { ImageBackground } from "react-native-web";
const Alerta = require("./assets/Fondos/despejado.jpg");
const imagen = require("./assets/Alertas/AlertaUV.png");

export default function App() {
  const [icon, setIcon] = useState("sun");
  const [image, setImage] = useState(Alerta);
  const [alert, setAlert] = useState(imagen);
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.settings}>
          <Feather name="settings" size={40} color="white" />
        </View>

        <ImageBackground
          source={image}
          style={styles.principal}
          imageStyle={{
            resizeMode: "stretch",
          }}
        >
          <Text style={styles.principalTexto}>29º</Text>
          <Text style={styles.principalTextoSecundario}>
            <span style={styles.rojo}>31º</span> -
            <span style={styles.azul}> 26º</span>
          </Text>
        </ImageBackground>
        <View style={styles.bajada}>
          <View style={styles.bajadaCaja}>
            <Text style={styles.blanco}>Humedad</Text>
            <Text style={styles.blanco}>64%</Text>
          </View>
          <View style={styles.bajadaCaja}>
            <Text style={styles.blanco}>Prob. precip.</Text>
            <Text style={styles.blanco}>10%</Text>
          </View>
        </View>
        <View style={styles.bajada}>
          <Image source={alert} style={styles.alertas} />
        </View>
        <View style={styles.bajada2}>
          <View style={styles.bajadaCaja2}>
            <Text style={styles.blanco}>Viento</Text>
            <Text style={styles.blanco}>13km/h</Text>
          </View>
          <View style={styles.bajadaCaja2}>
            <Text style={styles.blanco}>Presión</Text>
            <Text style={styles.blanco}>1013hPa</Text>
          </View>
        </View>
        <View style={styles.bajada3}>
          <View style={styles.bajadaCaja3}>
            <Text style={styles.blanco2}>Mañana</Text>
            <Feather name="sun" size={36} color="#fff" style={styles.iconos} />
            <Text style={styles.blanco}>31º</Text>
          </View>
          <View style={styles.bajadaCaja3}>
            <Text style={styles.blanco2}>Tarde</Text>
            <Fontisto
              name="day-cloudy"
              size={36}
              color="#fff"
              style={styles.iconos}
            />
            <Text style={styles.blanco}>28º</Text>
          </View>
          <View style={styles.bajadaCaja3}>
            <Text style={styles.blanco2}>Noche</Text>
            <Feather name="moon" size={36} color="#fff" style={styles.iconos} />
            <Text style={styles.blanco}>26º</Text>
          </View>
        </View>
        <View style={styles.bajada4}>
          <View style={styles.bajadaCaja4}>
            <Text style={styles.blanco}>Mañana</Text>
            <View style={styles.contenido}>
              <Feather name="cloud-rain" size={60} color="#fff" />
              <Text style={styles.blanco3}>24º</Text>
              <View>
                <Text style={styles.blanco2}>Prob. precip.: 89%</Text>
                <Text style={styles.blanco2}>Humedad: 90%</Text>
                <Text style={styles.blanco2}>Viento: 20km/h</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#252525",
  },
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
    height: 263,
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
    borderRadius: 60,
    textAlign: "center",
  },
  blanco: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
  alertas: {
    width: 277,
    height: 75,
    resizeMode: "stretch",
    borderRadius: 20,
  },
  bajadaCaja2: {
    backgroundColor: "#555555",
    width: "50%",
    padding: 20,
    borderRadius: 20,
    textAlign: "center",
  },
  bajada2: {
    backgroundColor: "#333333",
    width: 300,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    padding: 20,
  },
  bajada3: {
    backgroundColor: "#333333",
    width: 300,
    height: 169,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "flex-start",
    padding: 20,
  },
  bajadaCaja3: {
    backgroundColor: "#555555",
    width: 88,
    padding: 20,
    borderRadius: 20,
    textAlign: "center",
  },
  blanco2: {
    color: "#FFF",
    fontSize: 13,
    textAlign: "center",
  },
  iconos: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    height: 41,
  },
  bajadaCaja4: {
    backgroundColor: "#555555",
    width: "95%",
    padding: 10,
    borderRadius: 20,
    textAlign: "center",
  },
  bajada4: {
    backgroundColor: "#333333",
    width: 300,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "flex-start",
    padding: 5,
    paddingBottom: 20,
    paddingTop: 20,
  },
  contenido: {
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
  blanco3: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 10,
  },
});
