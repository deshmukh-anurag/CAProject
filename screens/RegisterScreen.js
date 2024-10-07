import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image,setImage]=useState("");
  const [name,setName]=useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ padding: 10, alignItems: "center" }}>
        <KeyboardAvoidingView>
          <View style={{ marginTop: 80, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: 500, color: "black" }}>Setup your profile</Text>
            <Text style={{ marginTop: 1, color: 'grey', textAlign: 'center', marginHorizontal: 12 }}>Profile are visible to your friends and connections and groups</Text>
            <Pressable style={{marginTop: 20}}>
              <Image
                source={{
                  uri: image
                    ? image
                    : 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
                }}
                style={{width: 50, height: 50, borderRadius: 25}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 4,
                  color: 'gray',
                  fontSize: 12,
                }}>
                Add
              </Text>
            </Pressable>
          </View>
          <View style={{ marginTop: 30 }}>
          <View>
              <Text style={{ fontSize: 18, fontWeight: 600, color: "grey" }}>
                Name</Text>
              <View>
                <TextInput value={name} onChangeText={setName} placeholderTextColor="#BEBEBE"
                  style={{ marginTop: 15, borderBottomColor: "#BEBEBE", borderBottomWidth: 1, paddingBottom: 10, width: 320, fontSize: 15 }}
                  placeholder='Enter  your Name' />

              </View>

            </View>
            <View>
              <Text style={{ fontSize: 18, fontWeight: 600, color: "grey" ,marginTop:15}}>
                Email</Text>
              <View>
                <TextInput value={email} onChangeText={setEmail} placeholderTextColor="#BEBEBE"
                  style={{ marginTop: 15, borderBottomColor: "#BEBEBE", borderBottomWidth: 1, paddingBottom: 10, width: 320, fontSize: 15 }}
                  placeholder='Enter  your email' />

              </View>

            </View>
            <View>
              <Text style={{ fontSize: 18, fontWeight: 600, color: "grey", marginTop: 15 }}>
                Password</Text>
              <View>
                <TextInput value={password} onChangeText={setPassword} placeholderTextColor="#BEBEBE"
                  style={{ marginTop: 15, borderBottomColor: "#BEBEBE", borderBottomWidth: 1, paddingBottom: 10, width: 320, fontSize: 15 }}
                  placeholder='Enter  your password' />

              </View>
              <View>
              <Text style={{ fontSize: 18, fontWeight: 600, color: "grey",marginTop:15 }}>
                Image</Text>
              <View>
                <TextInput value={image} onChangeText={setImage} placeholderTextColor="#BEBEBE"
                  style={{ marginTop: 15, borderBottomColor: "#BEBEBE", borderBottomWidth: 1, paddingBottom: 10, width: 320, fontSize: 15 }}
                  placeholder='Enter  your image url' />

              </View>

            </View>

            </View>
            <Pressable style={{ width: 200, backgroundColor: "#4A55A2", padding: 15, marginTop: 50, marginLeft: 'auto', marginRight: 'auto', borderRadius: 6 }}>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: "bold", textAlign: "center" }}>Login</Text>

            </Pressable>
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text style={{ textAlign: "center", color: "gray", fontSize: 16, margin: 12 }}>Don't Have an account? Register</Text>
            </Pressable>

          </View>
        </KeyboardAvoidingView>

      </View>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})