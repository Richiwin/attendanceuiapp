
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Geolocation from '@react-native-community/geolocation';

const Attendance = ({navigation}) => {
  const cameraRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideoUri, setRecordedVideoUri] = useState(null);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log('Photo taken:', data.uri);

      Alert.alert(
        'Attendance has been marked',
        '',
        [
          {
            text: 'OK',
            onPress: navigateToHome,
          },
        ],
        {cancelable: false},
      );
    }
  };
  function navigateToHome() {
    Geolocation.getCurrentPosition(info => console.log(info));
    navigation.reset({
      index: 0,
      routes: [{name: 'splash'}],
    });
  }

  const toggleRecording = async () => {
    if (cameraRef.current) {
      if (isRecording) {
        cameraRef.current.stopRecording();
      } else {
        const options = {quality: RNCamera.Constants.VideoQuality['480p']};
        const data = await cameraRef.current.recordAsync(options);
        setRecordedVideoUri(data.uri);
      }
      setIsRecording(!isRecording);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera ref={cameraRef} style={styles.camera} captureAudio={true} />
      <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
        <Text style={styles.captureButtonText}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.recordButton} onPress={toggleRecording}>
        <Text style={styles.recordButtonText}>
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </Text>
      </TouchableOpacity>
      {recordedVideoUri && (
        <Video source={{uri: recordedVideoUri}} style={styles.videoPreview} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '70%',
  },
  captureButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  captureButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  photoPreview: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default Attendance;


// import React, { useState, useRef } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Alert,Image } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import Geolocation from '@react-native-community/geolocation';
// import firebase from 'firebase/app';
// import 'firebase/auth'; // Import the specific Firebase services you need
// import 'firebase/firestore';
// import 'firebase/storage';



// const Attendance = () => {
//   const cameraRef = useRef(null);
//   const [selfieUri, setSelfieUri] = useState(null);

//   const takePhoto = async () => {
//     if (cameraRef.current) {
//       const options = { quality: 0.5, base64: true };
//       const data = await cameraRef.current.takePictureAsync(options);
//       setSelfieUri(data.uri);
//     }
//   };

//   const submitAttendance = async () => {
//     if (!selfieUri) {
//       return; // No selfie taken
//     }

//     Geolocation.getCurrentPosition(
//       async position => {
//         const { latitude, longitude } = position.coords;

//         try {
//           const storageRef = firebase.storage().ref();
//           const selfieFileName = `selfie_${Date.now()}.jpg`;
//           const selfieRef = storageRef.child(selfieFileName);

//           const selfieBlob = await fetch(selfieUri).then(response => response.blob());

//           await selfieRef.put(selfieBlob);

//           // Get download URL for the selfie
//           const selfieDownloadURL = await selfieRef.getDownloadURL();

//           // Store the attendance data in Firestore
//           await firebase.firestore().collection('attendance').add({
//             selfie: selfieDownloadURL,
//             latitude,
//             longitude,
//             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//           });

//           Alert.alert('Attendance has been marked successfully.');
//         } catch (error) {
//           console.error('Error submitting attendance:', error);
//         }
//       },
//       error => console.log('Error getting location:', error)
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <RNCamera ref={cameraRef} style={styles.camera} captureAudio={false} />
//       <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
//         <Text style={styles.captureButtonText}>Take Selfie</Text>
//       </TouchableOpacity>
//       {selfieUri ? (
//         <Image source={{ uri: selfieUri }} style={styles.selfiePreview} />
//       ) : null}
//       <TouchableOpacity style={styles.submitButton} onPress={submitAttendance}>
//         <Text style={styles.submitButtonText}>Submit Attendance</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   camera: {
//     width: '100%',
//     height: '70%',
//   },
//   captureButton: {
//     backgroundColor: 'blue',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   captureButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   selfiePreview: {
//     width: 200,
//     height: 200,
//     marginTop: 20,
//   },
//   submitButton: {
//     backgroundColor: 'green',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   submitButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default Attendance;
