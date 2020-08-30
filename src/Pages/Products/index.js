import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Container, ProductCard, PageTitle } from '../../Components';
import HELIX_HTTP, { Entities } from '../../Services/Helix'
import { ScrollView } from 'react-native';

export default function Products({ navigation }) {

    const [ products, setProducts ] = useState([])

    useEffect(() => {
        console.log(products.length)
        async function loadProducts() {
            try {
                const response = await HELIX_HTTP.get(
                    `${Entities}/?type=Product`
                )
                if (response.status == 200) {
                    setProducts(response.data)
                }
            } catch ( _err ) {
                console.log("deu erro!!!", _err )
            }
        }

        loadProducts()
    }, [])

  

    return (
        <Container>
            <ScrollView>
                <PageTitle text="Produtos"/>
            {   
                products.map((product, key) => {
                   return (
                       <ProductCard
                            key={key}
                            Title={product.name.value}
                            Price={product.price.value}
                            Id={product.id}
                       />
                   )
                }) 
            }
            </ScrollView>
        </Container>
    );
}
