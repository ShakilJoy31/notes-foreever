import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const NewNote = ({ route, navigation, setTitle, setDescription, setCustomNavigation }) => {
    useEffect(() => {
        setCustomNavigation(navigation);
    }, [])
    return (
        <View style={{ paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#000', flex: 1 }}>

            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.userName}>Write Title</Text>
                    <Text style={styles.time}>Today 2:10 PM</Text>
                </View>

                <TextInput
                    style={[styles.inputField, { marginVertical: 5 }]}
                    placeholder="Write your title"
                    placeholderTextColor="#000"
                    onChangeText={(e) => setTitle(e)}
                />
            </View>



            <View style={{marginTop: 45}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.userName}>Write Description</Text>
                </View>

                <TextInput
                    style={[styles.inputFieldArea, { marginVertical: 5 }]}
                    placeholder="Write your description"
                    placeholderTextColor="#000"
                    multiline={true} 
                    numberOfLines={4}
                    onChangeText={(e) => setDescription(e)}
                />
                
            </View>
        </View>
    )
}

export default NewNote;

const styles = StyleSheet.create({
    userName: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    time: {
        color: '#rgba(230, 230, 230, 0.894)',
        fontSize: 18,
    },

    // The input...
    inputField: {
        width: '100%',
        color: '#000',
        backgroundColor: '#fff',
        height: 45,
        borderRadius: 5,
        paddingLeft: 5,
    },
    inputFieldArea:{
        width: '100%',
        color: '#000',
        backgroundColor: '#fff',
        height: 300,
        borderRadius: 5,
        padding: 5,
        textAlignVertical: 'top',
    }
});






























{/* <ImageBackground source={require('../../assets/pexels-rahul.jpg')}
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


<ScrollView style={{ flex: 1 }}>
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


{/* Add new note button */}
{/* <TouchableOpacity onPress={handleAddNewNoteButton} style={styles.plusButton}>
    <Text style={[styles.userName, { fontSize: 45 }]}>+</Text>
</TouchableOpacity>

</ImageBackground > * /} */}