import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import Callapi from '../Callapi';

const PoppinsRegular = require('@expo-google-fonts/poppins/Poppins_400Regular.ttf');
const PoppinsBold = require('@expo-google-fonts/poppins/Poppins_700Bold.ttf');
const PoppinsSBold = require('@expo-google-fonts/poppins/Poppins_600SemiBold.ttf');
const forminput = ' https://afifahhzt.github.io/responsi/';
const petaweb = ' https://afifahhzt.github.io/responsi/map.html';

const Tab = createBottomTabNavigator();

const FloatingButton = ({ onPress }) => (
  <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
    <Fontawesome5 name="users" size={25} color="#fff" />
  </TouchableOpacity>
);



function HomeScreen() {
  const navigation = useNavigation();

  const navigateToMap = () => {
    navigation.navigate('Map');
  };
  const navigateToListData = () => {
    navigation.navigate('List Data');
  };

  const navigateToAddData = () => {
    navigation.navigate('Add Data');
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <>
      <View style={[styles.header, { backgroundColor: '#FFD700' }]}>
        <Text style={[styles.headerText, { fontFamily: 'PoppinsSemiBold'}]}>
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



function MapScreen() {
  return <WebView source={{ uri: petaweb }} />;
}
function AddDataScreen() {
  return <WebView source={{ uri: forminput }} />;
}
function ListDataScreen() {
  return (
    <View>
      <Callapi />
    </View>
  );
}
function ProfileScreen() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}
function MyTabs() {
  return (
    // <NavigationContainer>
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#FFD700',
      tabBarInactiveTintColor: '#1E90FF',
      tabBarStyle: {
        backgroundColor: '#333',
      },
    }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5
              name="home"
              color="#D9EDFC"
              size={size}
              style={{ color: '#D9EDFC' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5
              name="map-marker-alt"
              color="#D9EDFC"
              size={size}
              style={{ color: '#D9EDFC' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add Data"
        component={AddDataScreen}
        options={{
          tabBarLabel: 'Buat Laporan',
          tabBarIcon: () => (
            <TouchableOpacity style={[styles.floatingButton, { bottom: 1, right: 13 }]}>
              <Fontawesome5 name="plus-circle" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="List Data"
        component={ListDataScreen}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5
              name="list-ul"
              color="#D9EDFC"
              size={size}
              style={{ color: '#D9EDFC' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Author',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5
              name="user-shield"
              color="#D9EDFC"
              size={size}
              style={{ color: '#D9EDFC' }}
            />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default MyTabs;
const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 1,
    right: 13,
    backgroundColor: '#FFD700', // Warna Biru Dongker
    borderRadius: 50,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  header: {
    paddingVertical: 14,
    backgroundColor: '#97d2e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
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