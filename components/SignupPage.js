import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { AuthenticationPostAPI } from "../APIrequests/PostRequests";
import { useState } from "react";

const SignupPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const handleSignupButton = () =>{
        const userData = {
            name: name,
            email: email,
            password: password,
            notes: []
        }
        AuthenticationPostAPI.createUser(userData).then((res) => {
            if(res?.message === 'User created successfully!Thank you.'){
                navigation.navigate('NotesDashboard')
            }else{
                console.log(res);
            }
        })
          .catch((error) => {
            console.log(error);
          });
    }



    return (
        <ImageBackground source={require('../assets/europeana-5TK1F5VfdI.jpg')}
            style={styles.homeBackgroundImage}
        >
            <View style={styles.theApp}>
                <View style={{backgroundColor: 'linear-gradient(to top, #rgba(199, 199, 199, 0.728) 0%, #rgba(199, 199, 199, 0.728) 100%)', paddingHorizontal: 5, paddingVertical: 65, borderRadius: 5,}}>
                <TextInput
                        style={[styles.inputField, { marginTop: 10 }]} 
                        placeholder="Enter your name"
                        placeholderTextColor="#000"
                        onChangeText={(e)=> setName(e)}
                    />

                    <TextInput
                        style={[styles.inputField, { marginTop: 10 }]} 
                        placeholder="Enter your email"
                        placeholderTextColor="#000"
                        onChangeText={(e)=> setEmail(e)}
                    />
                    <TextInput
                        style={[styles.inputField, { marginTop: 10 }]} 
                        placeholder="Enter your password"
                        placeholderTextColor="#000"
                        onChangeText={(e)=> setPassword(e)}
                        secureTextEntry={true} // For password input
                    />

                    <View style={{marginTop: 15}}>
                        <TouchableOpacity onPress={handleSignupButton} style={styles.gettingStartedButton}>
                            <Text style={{ color: '#fff', fontSize: 18}}>Sign up</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: '#000', alignSelf: 'center', marginTop: 25, fontSize: 18, flexDirection: 'row'}}>Already have an account. Log in</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </ImageBackground>
    )
}

export default SignupPage;


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
