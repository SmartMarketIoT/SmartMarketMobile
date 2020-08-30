import React from 'react';
import { CardContainer, CardTitle, CardPrice, CardId, CardPriceGreen } from './styles'

const ProductCard = ({ Title, Price, Id}) => {
  return (
    <CardContainer>
        {Title ? <CardTitle>{Title}</CardTitle> : null}
        <CardPrice>Preço: <CardPriceGreen>R$ {Price}</CardPriceGreen></CardPrice>
        <CardId>Id: {Id}</CardId>
    </CardContainer>
  );
}

export default ProductCard;