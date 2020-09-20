import React from 'react';
import { CardContainer, CardTitle, CardPrice, CardId, CardPriceGreen, CardImage, CardContent } from './styles'

const ProductCard = ({ Title, Price, Id, Uri}) => {
  return (
    <CardContainer>
        <CardImage source={{uri: Uri}} />
        <CardContent>
            <CardTitle>{Title}</CardTitle>
            <CardPrice>Preço: <CardPriceGreen>R$ {Price}</CardPriceGreen></CardPrice>
            <CardId>Id: {Id}</CardId>
        </CardContent>        
    </CardContainer>
  );
}

export default ProductCard;