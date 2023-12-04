import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const loginpage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hai! Welcome JaKi</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#3498db"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#3498db"
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Home');
                }}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default loginpage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50', // Warna gelap, misalnya charcoal atau dark gray
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#f39c12', // Warna kuning
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#3498db', // Warna biru
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
        color: '#3498db', // Warna biru
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#f39c12', // Warna kuning
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
