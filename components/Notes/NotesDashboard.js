import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { LinearGradient } from "expo-linear-gradient";

const NotesDashboard = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const handleSignupButton = () => {
        const userData = {
            name: name,
            email: email,
            password: password
        }
        //   () => navigation.navigate('Home')
    }
    const cardData = [
        { id: 1, title: 'Shoping list for august' },
        { id: 2, title: 'Random list' },
        { id: 3, title: 'My Hidden secrets' },
        { id: 4, title: 'A memoriable history of my last journey to cox"s bazar. ' },
        { id: 5, title: 'Card 4' },
        { id: 6, title: 'Card 4' },
        { id: 7, title: 'Card 4' },
        { id: 8, title: 'Card 4' },
        { id: 9, title: 'Card 4' },
        { id: 10, title: 'Card 4' },
        { id: 11, title: 'Card 4' },
        { id: 12, title: 'Card 4' },
        { id: 13, title: 'Card 4' },
        { id: 14, title: 'Card 4' },
        { id: 15, title: 'Card 4' },
        { id: 16, title: 'Card 4' },
        { id: 17, title: 'Card 4' },
        // Add more card data as needed
    ];


    return (
        <ImageBackground source={require('../../assets/pexels-rahul.jpg')}
            style={styles.homeBackgroundImage}
        >
            <LinearGradient
                colors={['#09203F', '#537895']}
                style={{ paddingBottom: 50, paddingTop: 25, borderBottomRightRadius: 35, borderBottomLeftRadius: 35 }}>

                <View style={styles.searchNote}>
                    <View style={styles.theSearchBar}>
                        <TextInput
                            style={[styles.inputField, { marginVertical: 5 }]}
                            placeholder="Search here..."
                            placeholderTextColor="#000"
                            onChangeText={(e) => setEmail(e)}
                        />
                        <FontAwesomeIcon icon={faSearch} size={23} color="white" />
                    </View>

                    <TouchableOpacity style={styles.profile}>
                        <Text style={styles.userName}>Shakil</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 24 }}>
                    <TouchableOpacity style={[styles.notesAndTodoButton, { backgroundColor: '#rgba(255, 68, 0, 0.808)' }]}>
                        <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center', alignSelf: 'center' }}>Notes</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={[styles.notesAndTodoButton, { backgroundColor: '#rgba(168, 168, 168, 0.403)' }]}>
                        <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center', alignSelf: 'center' }}>To Do</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>


            <ScrollView style={{flex: 1}}>
                <View style={styles.rowContainer}>
                    {cardData.map((card, index) => (
                        <TouchableOpacity key={index} style={styles.cardContainer}>
                            <LinearGradient
                                colors={['#614385a3', '#516395a9']}
                                style={styles.gradientCard}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.textStyle}>{card.title}</Text>
                                    <Text style={styles.notesTimeStamps}>12 November, 12:55 AM</Text>
                                </View>
                                <Text style={styles.noteDescription}>This is the discription for the individual notes.</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>
                <TouchableOpacity style={styles.plusButton}>
                <Text style={[styles.userName, {fontSize: 45}]}>+</Text>
            </TouchableOpacity>


            {/* The add button */}
           

        </ImageBackground>
    )
}

export default NotesDashboard;


const styles = StyleSheet.create({
    homeBackgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        paddingHorizontal: 10,
        paddingTop: 25,
    },
    notesAndTodoButton: {
        width: 150,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 1
    },
    plusButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#fff',
        borderRadius: 40,
        width: 80,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    textStyle: {
        color: '#fff',
        marginBottom: 10,
        fontSize: 22,
        width: 220,
        marginRight: 5,
    },
    noteDescription: {
        color: '#rgba(230, 230, 230, 0.894)',
        fontSize: 18
    },
    notesTimeStamps: {
        color: '#rgb(240, 120, 148)',
        fontSize: 14,
        marginTop: 7
    },
    userName: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center'
    },
    theSearchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#rgba(199, 199, 199, 0.728)',
        borderRadius: 35,
        padding: 10,
        borderRightWidth: 1,
        borderColor: '#000'
    },
    profile: {
        backgroundColor: '#rgba(199, 199, 199, 0.728)',
        borderRadius: 30,
        width: 60,
        height: 60,
        paddingVertical: 19
    },

    rowContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        // flexWrap: 'wrap',
    },
    cardContainer: {
        width: '100%',
        marginTop: 15,
        marginBottom: 5,
    },
    gradientCard: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
    },

    searchNote: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        marginTop: 10,
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
        borderRadius: 200,
        marginTop: 20,
        width: 70
    },

    // The input...
    inputField: {
        width: 275,
        color: '#000',
    },
});






// Store

// <View style={{marginTop: 15}}>
// <TouchableOpacity onPress={handleSignupButton} style={styles.gettingStartedButton}>
//     <Text style={{ color: '#fff', fontSize: 18}}>Sign up</Text>
// </TouchableOpacity>
// </View>






// {/* <View style={styles.theApp}>
//                     <LinearGradient
//                         colors={['#09203f69', '#5378956d']}
//                         style={{ paddingHorizontal: 20, paddingVertical: 35, borderRadius: 5, }}>
//                         <View>
//                             <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 25, flexDirection: 'row' }}>This is notes dashboard</Text>

//                             {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//                             <Text style={{ color: '#000', alignSelf: 'center', marginTop: 25, fontSize: 18, flexDirection: 'row' }}>This is notes dashboard</Text>
//                         </TouchableOpacity> */}
//                         </View>
//                     </LinearGradient>



//                     <LinearGradient
//                         colors={['#09203f69', '#5378956d']}
//                         style={{ paddingHorizontal: 20, paddingVertical: 35, borderRadius: 5, }}>
//                         <View>
//                             <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 25, flexDirection: 'row' }}>This is notes dashboard</Text>

//                             {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//                             <Text style={{ color: '#000', alignSelf: 'center', marginTop: 25, fontSize: 18, flexDirection: 'row' }}>This is notes dashboard</Text>
//                         </TouchableOpacity> */}
//                         </View>
//                     </LinearGradient>



//                     <LinearGradient
//                         colors={['#09203f69', '#5378956d']}
//                         style={{ paddingHorizontal: 20, paddingVertical: 35, borderRadius: 5, }}>
//                         <View>
//                             <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 25, flexDirection: 'row' }}>This is notes dashboard</Text>

//                             {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//                             <Text style={{ color: '#000', alignSelf: 'center', marginTop: 25, fontSize: 18, flexDirection: 'row' }}>This is notes dashboard</Text>
//                         </TouchableOpacity> */}
//                         </View>
//                     </LinearGradient>
//                 </View> */}