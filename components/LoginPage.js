import { useState } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { AuthenticationAPI, AuthenticationPostAPI } from "../APIrequests/PostRequests";
import { AuthenticationGetAPI } from "../APIrequests/GetRequests";
import Spinner from "./Spinner";

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginButton = () =>{
        const userData = {
            email: email,
            password: password
        }
        AuthenticationPostAPI.postUser(userData).then((res) => {
            if(res?.message === 'User found!'){
                navigation.navigate('NotesDashboard');
            }else {
                console.log('Not matched.');
            }
        })
          .catch((error) => {
            console.log(error);
          });
    }

    return (
        <ImageBackground source={require('../assets/karsten-wurth.jpg')}
            style={styles.homeBackgroundImage}
        >
            <View style={styles.theApp}>
                <View style={{ backgroundColor: 'linear-gradient(to top, #rgba(199, 199, 199, 0.728) 0%, #rgba(199, 199, 199, 0.728) 100%)', paddingHorizontal: 5, paddingVertical: 65, borderRadius: 5, }}>
                    <TextInput
                        style={[styles.inputField, { marginTop: 10 }]} // Add marginTop for some space between the input fields
                        placeholder="Enter your email"
                        placeholderTextColor="#000"
                        // secureTextEntry={true} // For password input
                        onChangeText={(e)=> setEmail(e)}
                        value={email}
                        />
                    <TextInput
                        style={[styles.inputField, { marginTop: 10 }]} // Add marginTop for some space between the input fields
                        placeholder="Enter your password"
                        placeholderTextColor="#000"
                        secureTextEntry={true} // For password input
                        onChangeText={(e)=> setPassword(e)}
                    />

                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity onPress={handleLoginButton} style={styles.gettingStartedButton}>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={{ color: '#000', alignSelf: 'center', marginTop: 25, fontSize: 18, flexDirection: 'row' }}>I am new here. Sign up</Text>
                    </TouchableOpacity>


                    {/* <Spinner></Spinner> */}
                </View>

            </View>

        </ImageBackground>
    )
}

export default LoginPage;


const styles = StyleSheet.create({
    homeBackgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    theApp: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
    },
    homePageText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    quoteWritter: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 20
    },
    gettingStartedButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        width: 370
    },

    // The input...
    inputField: {
        borderBottomWidth: 3,
        borderBottomColor: '#000',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: 370,
        color: '#000',
    },
});
