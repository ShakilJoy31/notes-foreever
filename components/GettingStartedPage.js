import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const GettingStartedPage = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/Getting-started-home-page.jpg')}
            style={styles.homeBackgroundImage}
        >
            <View style={styles.theApp}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.homePageText}>Welcome to note-forever! 🎉 Step into a world where your ideas take center stage and organization is a breeze. Whether you're brainstorming, planning, or reflecting, this platform is your creative canvas. Let's embark on this journey together and make note-taking an adventure!</Text>
                    {/* <Text style={styles.quoteWritter}>-</Text> */}
                </View>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.gettingStartedButton}>
                        <Text style={{ color: '#fff' }}>Let me make notes</Text>
                    </TouchableOpacity>
                </View>
            </View>




        </ImageBackground>
    )
}

export default GettingStartedPage;


const styles = StyleSheet.create({
    homeBackgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    theApp: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 90

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
        width: 300
    }
});
