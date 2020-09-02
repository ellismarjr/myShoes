import React from 'react';
import {View, Text} from 'react-native';

import {Container, ImgShoes, ShoesPrice, ShoesName} from './styles';

export default function Detail({navigation}) {
  navigation.setOptions({
    headerTitle: 'Nike Downshifter 10',
  });
  return (
    <Container>
      <ImgShoes
        source={require('../../assets/detail.png')}
        resizeMode="cover"
      />
      <ShoesPrice>R$ 280,90</ShoesPrice>
      <ShoesName>Nike Downshifter 10</ShoesName>
    </Container>
  );
}
