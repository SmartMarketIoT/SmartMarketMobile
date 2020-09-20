import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Container, PurchaseCard, PageTitle, ContentContainer, Button, Media } from '../../Components';
import HELIX_HTTP, { Entities } from '../../Services/Helix'
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native';
import EmptyCart from '../../Assets/images/emptyCart.png';

export default function Purchases({ navigation }) {

    const [ purchases, setPurchases ] = useState([])
    const [ userId, setUserId ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {        
        async function loadPurchases() {
            try {
                const response = await HELIX_HTTP.get(
                    `${Entities}/?q=refClient==${userId}&attrs=*&type=Purchase`
                )
                console.log(response.data)
                if (response.status == 200) {
                    setPurchases(response.data)
                }
            } catch ( _err ) {
                console.log("deu erro!!!", _err )
            }
        }

        async function getUserId() {
            try {
                const value = await AsyncStorage.getItem('@userId')
                console.log(value)
                if(value !== null) {
                    setUserId(value)
                    setLoading(false)
                }
            } catch (_err) {
                console.log("Erro ao buscar dado no local storage:", _err)
            }
        }

        getUserId().then(() => {
            if (userId != null && loading) {
                loadPurchases()
            }
        })
        
    }, [userId])

  

    return (
        <Container>
            { !loading ?
                purchases.length > 0 ?
                    <ScrollView>
                        <PageTitle text="Minhas compras"/>
                        {                               
                            purchases.map((purchase, key) => {
                                console.log(purchase)
                                return (
                                    <PurchaseCard
                                            key={key}
                                            Price={purchase.itemsPrice.value}
                                            Id={purchase.id}
                                    />
                                )
                            })                               
                        }
                    </ScrollView> :
                    <ContentContainer>
                        <PageTitle text="Você ainda não comprou nada!!!"/>
                        <Media source={EmptyCart}/>
                    </ContentContainer>
                : null
            }            
        </Container>
    );
}
