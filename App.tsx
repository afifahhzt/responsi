import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProfilePage = () => {
  const [linkedinLink, setLinkedinLink] = useState('https://www.linkedin.com/in/Afifah');
  const [emailLink, setEmailLink] = useState('afifah.pro2002@mail.ugm.ac.id');
  const [githubLink, setGithubLink] = useState('https://github.com/afifahhzt');


  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://media.licdn.com/dms/image/D5603AQFgHFq0kaCt6Q/profile-displayphoto-shrink_400_400/0/1701143915963?e=1707350400&v=beta&t=I5kGlbTV-07ePTgnDxu2-e76BwdGluhQ71WIOGb9q3w'
          }} // Ganti dengan URL gambar profil Anda
        />
        <Text style={styles.name}>Afifah Progestina</Text>
        <Text style={styles.bio}>
          Hallo! Saya mahasiswa program studi Sistem Informasi Geografis Universitas Gadjah Mada Yogyakarta atau founder dari aplikasi JaKi (Jalan Kita)
        </Text>
        <Text style={styles.bioSmall}>
          Jika terdapat kritik dan saran, bisa hubungi aku lewat informasi di bawah ini ya!
        </Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Telepon:</Text>
            <FontAwesome5 name="phone" size={16} color="#0066cc" />
            <Text style={styles.value}>123-456-7890</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Email:</Text>
            <FontAwesome5 name="envelope" size={16} color="#DF826C" />
            <Text style={[styles.value, styles.emailLink]} onPress={() => Linking.openURL(emailLink)}>{emailLink}</Text>
          </View>
           <View style={styles.infoItem}>
            <Text style={styles.label}>GitHub:</Text>
            <FontAwesome5 name="github" size={16} color="#27ae60" />
            <Text style={[styles.value, styles.githubLink]} onPress={() => Linking.openURL(githubLink)}>{githubLink}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>LinkedIn:</Text>
            <FontAwesome5 name="linkedin" size={16} color="#FED9ED" />
            <Text style={[styles.value, styles.linkedinLink]} onPress={() => Linking.openURL(linkedinLink)}>{linkedinLink}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    marginTop: 17,
    marginBottom: 17,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#1E1E1E', // Warna hitam untuk mode gelap
    borderRadius: 15,
    opacity: 0.9, // Nilai yang lebih rendah untuk membuat latar belakang lebih gelap
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    alignSelf: 'center',
  },
  name: {
    fontSize: 28, // Ukuran font nama yang lebih besar
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0066cc', // Biru
    textAlign: 'center',
  },
  bio: {
    fontSize: 16,
    marginBottom: 10,
    color: '#F9F9E0', // Biru
    textAlign: 'center',
  },
  bioSmall: {
    fontSize: 14, // Ukuran font keterangan yang lebih kecil
    marginBottom: 20,
    color: '#F9F9E0', // Biru
    textAlign: 'center',
  },
  infoContainer: {
    width: '100%',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0066cc', 
  },
  value: {
    fontSize: 14,
    color: '#0066cc', 
  },
  githubLink: {
    color: '#27ae60',
  },
  linkedinLink: {
    color: '#FED9ED',
  },
  emailLink: {
    color: '#DF826C', 
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ProfilePage;
