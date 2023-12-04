import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Homepage = () => {
    const navigation = useNavigation();

    const navigateToMap = () => {
      navigation.navigate('Petalokasi', {screen: 'Map'});
    };
    const navigateToListData = () => {
      navigation.navigate('Petalokasi',  {screen: 'List Data'});
    };
  
    const navigateToAddData = () => {
      navigation.navigate('Petalokasi',  {screen: 'Buat Laporan'});
    };
  
    const navigateToProfile = () => {
      navigation.navigate('Petalokasi', {screen: 'Profile'});
    };
  
    return (
      <>
        <View style={[styles.header, { backgroundColor: '#FFD700' }]}>
          <Text style={[styles.headerText, { fontFamily: 'PoppinsSemiBold' }]}>
            JaKi
          </Text>
        </View>
  
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToMap}
          >
            <Text style={styles.buttonText}>JaKi Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToListData}
          >
            <Text style={styles.buttonText}>List Data Laporan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToAddData}
          >
            <Text style={styles.buttonText}>Tambah Laporan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToProfile}
          >
            <Text style={styles.buttonText}>About Author</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

export default Homepage

const styles = StyleSheet.create({
    floatingButton: {
      position: 'absolute',
      bottom: 1,
      right: 13,
      backgroundColor: '#1E90FF', // Warna Biru Dongker
      borderRadius: 50,
      width: 56,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 1,
    },
    header: {
      paddingVertical: 12,
      backgroundColor: '#97d2e5',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#2391d9',
    },
    container: {
      marginHorizontal: 20,
      marginTop: 70,
      padding: 20,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    button: {
        width: '100%',
        height: 70,
        backgroundColor: '#f39c12', // Warna kuning
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 7
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
    });
