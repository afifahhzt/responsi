import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';


const Callapi = () => {
    const jsonUrl = 'https://script.google.com/macros/s/AKfycbzTbSk_8Kld8Ovo5hYJR3ieVngPsDPB5JzR5HfcnNif9WJjYLBm0aZJQges_0fuh1Rs/exec';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
        , []);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }


    return (
        <SafeAreaView>
            {isLoading ? (
                <View>
                    <Text>Loading...</Text>
                </View>
            ) : (
                
                <View>
                    <FlatList
                        data={dataUser}
                        onRefresh={() => { refreshPage() }}
                        refreshing={refresh}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() =>
                                    Linking.openURL(
                                        'google.navigation:q=' +
                                        item.latitude +
                                        ',' +
                                        item.longitude
                                    )}>
                                <View style={styles.card}>
                                    <View style={styles.avatar}>
                                        <FontAwesome5 name="tools" size={50} color="#F05941" />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.cardtitle}>{item.kategori_laporan}</Text>
                                        <Text style={styles.deskripsi}>Dampak: {item.dampak}</Text>
                                        <Text style={styles.deskripsi}>Catatan: {item.catatan}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </SafeAreaView>

    )
}

export default Callapi

const styles = StyleSheet.create({
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
      bekgron: {
        backgroundColor: '#DEDEDE',
      },
      title: {
        paddingVertical: 12,
        backgroundColor: '#97d2e5',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      avatar: {
        borderRadius: 100,
        width: 80,
        marginLeft: 10,
        marginTop: 10,
      },
      cardtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f0f0f0',
      },
      deskripsi: {
        fontSize: 10,
        color: '#f0f0f0',
      },
      card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#1f1f1f',
        shadowColor: '#2391d9',
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 20,
        marginVertical: 7,
      },
      button: {
        marginVertical: 10,
      },
      textContainer: {
        flex: 1,
        alignItems: 'flex-start',
      }
    });
