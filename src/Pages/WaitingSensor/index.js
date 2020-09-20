import React, {useEffect, useState} from 'react';
import { Container, ContentContainer, Media, PageTitle, InputLabel, BackButton, ProductCard, Button } from '../../Components';
import HELIX_HTTP, { Entities } from '../../Services/Helix'
import { View, ScrollView } from 'react-native';
import Order from '../../Assets/images/order.png'
import { set } from 'react-native-reanimated';


const WaitingSensor = ({ navigation, route }) => {

    const [ products, setProducts ] = useState([])
    const [ reload, setReload ] = useState(0);

    useEffect(() => {
        async function loadProducts() {
            try {
                //route.params
                const response = await HELIX_HTTP.get(
                    `${Entities}/?q=refPurchase==${route.params.purchaseId}&type=InventoryItem&attrs=*`
                )
                console.log(response.data)
                if (response.status == 200) {
                    setProducts(response.data)
                }
            } catch ( _err ) {
                console.log("deu erro!!!", _err )
            }
        }
        loadProducts();
        
    }, [])

    async function reloadProducts() {
        try {
            //route.params
            const response = await HELIX_HTTP.get(
                `${Entities}/?q=refPurchase==${route.params.purchaseId}&type=InventoryItem&attrs=*`
            )
            console.log(response.data)
            if (response.status == 200) {
                setProducts(response.data)
            }
        } catch ( _err ) {
            console.log("deu erro!!!", _err )
        }
    }

    setTimeout(reloadProducts, 5000);

    return (
        <Container>
            {   products.length <= 0 ?
                    <ContentContainer>
                    <BackButton
                            onButtonPress={() => {
                                navigation.goBack();
                            }}
                        />
                    <PageTitle text="Sensor escaneado!"/>
                    <InputLabel text="Agora você só precisa aproximar seus produtos e eles aparecerão aqui." />
                    <Media source={Order}/>
                    </ContentContainer> 
                :
                <>
                    <ScrollView>
                        <PageTitle text="Produtos identificados"/>
                        {                               
                            products.map((product, key) => {                                
                                return (
                                    <ProductCard
                                        key={key}
                                        Title={product.refProduct.metadata.name.value}
                                        Price={product.refProduct.metadata.price.value}
                                        Id={product.refProduct.value}
                                        Uri={product.refProduct.metadata.img.value}
                                    />
                                )
                            })                               
                        }
                    </ScrollView> 
                    <Button title={"Finalizar"}/>
                </>
            }
        </Container>
    )
}

export default WaitingSensor;