import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image, ImageBackground, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    console.log("submitted:", { username, email, phone });
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.imgBackground} 
        source={{uri: "https://i.postimg.cc/VkN3YqmQ/yellow-background.avif"}}  
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* First Card */}
          <View style={styles.card}>
            <View style={styles.logoContainer}>
              <Image 
                style={styles.logo} 
                source={{uri: "https://i.postimg.cc/CxLRHxpH/logo.png"}}
              />
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Name :</Text> 
                <TextInput  
                  style={styles.input}
                  placeholder="enter name"
                  value={username}
                  onChangeText={setUsername}
                  placeholderTextColor="#999"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email :</Text>
                <TextInput  
                  style={styles.input}
                  placeholder="enter email"
                  value={email}
                  onChangeText={setEmail}
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Phone No. :</Text>
                <TextInput  
                  style={styles.input}
                  placeholder="enter Phone No."
                  value={phone}
                  onChangeText={setPhone}
                  placeholderTextColor="#999"
                  keyboardType="phone-pad"
                />
              </View>

              <TouchableOpacity 
                style={[styles.button, { backgroundColor: "#2563eb" }]}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Second Card */}
          <View style={[styles.card, styles.secondCard]}>
            <View style={styles.logoContainer}>
              <Image 
                style={[styles.logo]} 
                source={{uri: "https://i.postimg.cc/9fDjCvyj/boy-logo.jpg"}}
              />
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Name :</Text> 
                <TextInput  
                  style={styles.input}
                  placeholder="enter name"
                  value={username}
                  onChangeText={setUsername}
                  placeholderTextColor="#999"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email :</Text>
                <TextInput  
                  style={styles.input}
                  placeholder="enter email"
                  value={email}
                  onChangeText={setEmail}
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Phone No. :</Text>
                <TextInput  
                  style={styles.input}
                  placeholder="enter Phone No."
                  value={phone}
                  onChangeText={setPhone}
                  placeholderTextColor="#999"
                  keyboardType="phone-pad"
                />
              </View>

              <TouchableOpacity 
                style={[styles.button, { backgroundColor: "#2563eb" }]}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 30,
    gap: 20,
  },
  card: {
    width: 350,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  secondCard: {
    backgroundColor: "#f8fafc",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  formContainer: {
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    height: 45,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#333",
  },
  button: {
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  }
});

export default App;