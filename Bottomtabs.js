import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import Countnumber from '../Countnumber';
import Callapi from '../Callapi';
import Createdata from '../Createdata';
import Getdata from '../Getdata';
import Editdata from '../Editdata';

const webmap = require('../peta/map.html');
const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <ScrollView>
            <Text></Text>
            <View>
                <View style={styles.listitems}>
                    <Image source={require('../peta/PETA_HUJAN_WILAYAH.png')} style={styles.image} />
                    <Text style={styles.caption}>Peta Hujan Wilayah DAS Bogowonto</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../peta/PETA_KEMIRINGAN_LERENG.png')} style={styles.image} />
                    <Text style={styles.caption}>Peta Kemiringan DAS Tinalah</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../peta/PETA_ORDE_SUNGAI.png')} style={styles.image} />
                    <Text style={styles.caption}>Peta Orde Sungai DAS Tinalah</Text>
                </View>
            </View>
        </ScrollView>
    );
}
function MapScreen() {
    return (

        <WebView source={webmap}
        />
    );
}
function ProfileScreen() {
    return (
        <View>
            <Portofolio />
        </View>
    );
}
function MahasiswaScreen() {
    return (
        <View>
            <Getjsonfile />
        </View>
    );
}
function CountnumberScreen() {
    return (
        <View>
            <Countnumber />
        </View>
    );
}
function CallapiScreen() {
    return (
        <View>
            <Callapi />
        </View>
    );
}
function CreatedataScreen() {
    return (
        <View>
            <Createdata />
        </View>
    );
}
function GetdataScreen() {
    return (
        <View>
            <Getdata />
        </View>
    );
}
function EditdataScreen() {
    return (
        <View>
            <Editdata />
        </View>
    );
}



function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}  >
                {/* <Tab.Screen name="Map" component={MapScreen}
                    options={{
                        tabBarLabel: 'Map',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="map-marker-alt" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="user" color={color} size={size} />
                        ),
                    }}
                />
                 <Tab.Screen name="Mahasiswa" component={MahasiswaScreen}
                    options={{
                        tabBarLabel: 'Mahasiswa',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="users" color={color} size={size} />
                        ),
                    }}
                />
                 <Tab.Screen name="Countnumber" component={CountnumberScreen}
                    options={{
                        tabBarLabel: 'Count Number',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="stopwatch" color={color} size={size} />
                        ),
                    }}
                />
                 <Tab.Screen name="Callapi" component={CallapiScreen}
                    options={{
                        tabBarLabel: 'Call API',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="user-plus" color={color} size={size} />
                        ),
                    }}
                /> */}
                 <Tab.Screen name="Createdata" component={CreatedataScreen}
                    options={{
                        tabBarLabel: 'Tambah Data',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="user-plus" color={color} size={size} />
                        ),
                    }}
                />
                 <Tab.Screen name="Getdata" component={GetdataScreen}
                    options={{
                        tabBarLabel: 'Data',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="database" color={color} size={size} />
                        ),
                    }}
                />
                 <Tab.Screen name="Editdata" component={EditdataScreen}
                    options={{
                        tabBarLabel: 'Edit Data',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="edit" color={color} size={size} />
                        ),
                    }}
                />  
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'stretch'
    },
    listitems: {
        padding: 20,
        alignItems: 'center',

    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
    }

})