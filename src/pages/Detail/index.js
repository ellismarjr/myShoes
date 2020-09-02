import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import Dot from '../../components/Dot';
import SizeShoesButton from '../../components/SizeShoesButton';
import ShopButton from '../../components/ShopButton';
import Footer from '../../components/Footer';

import {
  Container,
  ImgShoes,
  ShoesPrice,
  ShoesName,
  DotContainer,
  SizeShoesContainer,
  SizeShoesList,
  ShoesInfo,
  Shoes,
  ShoesDescription,
  ShoesCategory,
  ShoesMaterial,
  Separator,
} from './styles';

export default function Detail({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Nike Downshifter 10',
    });
  }, []);
  return (
    <Container>
      <ImgShoes
        source={require('../../assets/detail.png')}
        resizeMode="cover"
      />
      <ShoesPrice>R$ 280,90</ShoesPrice>
      <ShoesName>Nike Downshifter 10</ShoesName>

      <DotContainer>
        <Dot color="#2379f4" />
        <Dot color="#fb6e53" />
        <Dot color="#ddd" />
        <Dot color="#222" />
      </DotContainer>

      <SizeShoesContainer>
        <SizeShoesList>
          <SizeShoesButton bgColor="#17181a" color="#FFF">
            40
          </SizeShoesButton>
          <SizeShoesButton>37</SizeShoesButton>
          <SizeShoesButton>39</SizeShoesButton>
          <SizeShoesButton>42</SizeShoesButton>
        </SizeShoesList>
      </SizeShoesContainer>

      <ShoesInfo>
        <Shoes>Nike Downshifter 10</Shoes>
        <ShoesDescription>
          O Nike Downshifter 10 traz suporte e amortecimento atualizados. Seu
          design leve e acolchoado ajuda a manter você se movimentando enquanto
          corre.
        </ShoesDescription>
        <ShoesCategory>- Categoria: Amortecimento</ShoesCategory>
        <ShoesMaterial>- Material: Mesh</ShoesMaterial>
      </ShoesInfo>

      <ShopButton />
      <Separator />

      <Footer />
    </Container>
  );
}
