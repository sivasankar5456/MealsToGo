import { SafeArea } from "../../../components/utility/SafeArea";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { useContext, useState } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components";
import { MyText } from "../../../components/typography/TextComponent";
import { Spacer } from "../../../components/spacer/Spacer";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;


export const SettingsScreen = ({ navigation }) => {

    const { onLogOut, user } = useContext(AuthenticationContext)
    const [myPhoto, setMyPhoto] = useState(null)

    const getProfilePicture = async (currentUser) => {

        const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
        setMyPhoto(photoUri)
        // console.log(photoUri);
    }

    useFocusEffect(() => {

        getProfilePicture(user)
    })

    return (
        <SafeArea>
            <AvatarContainer>

                <Spacer variant="top.large">
                    <TouchableOpacity onPress={() => navigation.navigate("camera")} >

                        {!myPhoto && <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />}
                        {myPhoto && <Avatar.Image size={180} source={{ uri: myPhoto }} backgroundColor="#2182BD" />}

                    </TouchableOpacity>
                </Spacer>

                <Spacer variant="top.large" >
                    <MyText variant="label" >{user.email}</MyText>
                </Spacer>

            </AvatarContainer>
            <List.Section>

                <SettingsItem
                    style={{ padding: 16 }}
                    title="Favourites"
                    description="View your favourites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={() => navigation.navigate("FavouritesScreen")}
                />
                <SettingsItem
                    style={{ padding: 16 }}
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="door" />}
                    onPress={() => onLogOut()}
                />

            </List.Section>
        </SafeArea>

    )
};