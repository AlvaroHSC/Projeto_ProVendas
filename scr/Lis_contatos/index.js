import react, { useEffect, useState} from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Avatar, Header, ListItem } from 'react-native-elements';
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import axios from 'axios';
import styles from "../Cadastro/style";

export default function L_contato({navigation, route}){

    const [getData, setData] = useState([]);

    useEffect (()=>{
        async function resgateDados(){
            const result = await axios(
                'http://professornilson.com/testeservico/clientes',
            );
            setData(result.data);
        }
        resgateDados();
    })

    return (
        <View>
            <Header
                centerComponent={{text: 'Lista', style: {fontsize: 20}}}
                rightComponent={
                    <button title="+"
                    onProgress={()=>navigation.navigate('Cadastro')}></button>
                }

            />
            <View>
            {
                getData.map((linha, i) => (
                    <ListItem key={i} bottonDivider >
                        <Avatar rounded size='medium' source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}}/>
                        <ListItem.Content>
                            <ListItem.Title>{linha.nome}</ListItem.Title>
                            <ListItem.Subtitle>{linha.telefone}</ListItem.Subtitle>
                        </ListItem.Content>

                    </ListItem>
                ))
            }
            </View>
        </View>    
    )
}