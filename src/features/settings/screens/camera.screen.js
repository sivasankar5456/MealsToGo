import React, { useContext,useRef,useState } from 'react'
import { Text, View, Button, TouchableOpacity,Image } from 'react-native'
import { Camera, CameraType } from 'expo-camera';
import styled from 'styled-components';
import { Spacer } from '../../../components/spacer/Spacer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { SafeArea } from '../../../components/utility/SafeArea';


const CameraArea=styled(SafeArea)`
align-items:center;
justify-content:center;
`;

const ProfileCamera = styled(Camera)`
width:100%;
height:100%;
`;

const Capture = styled(TouchableOpacity)`
border: 3px solid  rgb(12, 176, 240);
height:60px ;
width:60px ;
border-radius: 50px;
padding: 10px;
align-items: center;
justify-content: center;
margin-bottom: 15px;

`;
const FlipCamera = styled(TouchableOpacity)`
border: 3px solid transparent;
height:55px ;
width:55px ;
border-radius: 50px;
padding: 5px;
align-items: center;
justify-content: center;
position: absolute;
left:270px
bottom: 15px;
`;

// const Click = styled(View)`
// border: 3px solid white;
// height:50px ;
// width:50px ;
// border-radius: 50px;
// background-color: white;
// `;

const CameraScreen = ({ navigation }) => {
    const [type, setType] = useState( CameraType.front);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const cameraRef = useRef();
    const { user } = useContext(AuthenticationContext)

// console.log(type);

    function toggleCameraType() {
        setType(current => (current ===  CameraType.front ? CameraType.back : CameraType.front));
      }
    
    const snap = async () => {

        // (async () => {
        //     const { status } = await Camera.requestCameraPermissionsAsync();
        //     requestPermission
        // })();

        if (cameraRef) {

            const photo = await cameraRef.current.takePictureAsync()

            // console.log(photo.uri);
            AsyncStorage.setItem(`${user.uid}-photo`, photo.uri)
            navigation.goBack();
        }

    }


    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <CameraArea>

            <Spacer variant="top.large" >
                <Text style={{ textAlign: 'center' }}>please allow camera to open</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </Spacer>
            </CameraArea>

        );
    }


    return (
        <ProfileCamera type={type} ref={(camera) => (cameraRef.current = camera)} style={{ alignItems: "center", justifyContent: "flex-end" }} >
           
            <Capture onPress={snap} >
            <Image style={{height:40,width:40,color:"white"}} source={{uri:"https://cdn-icons-png.flaticon.com/512/3178/3178294.png"}} />
            </Capture>

            <FlipCamera onPress={toggleCameraType} >
            <Image style={{height:40,width:40,color:"white"}} source={{uri:"https://cdn-icons-png.flaticon.com/128/8518/8518236.png"}} onPress={toggleCameraType}  />
            </FlipCamera>
            
        </ProfileCamera>
    );
}

export default CameraScreen;

