import React from 'react';
import {ScrollView, View} from 'react-native';

import Shoes from '../Shoes';

import {Container, ContainerText, ShoesSuggestions} from './styles';
export default function Footer() {
  return (
    <Container>
      <ContainerText>VOCÊ TAMBÉM PODE GOSTAR</ContainerText>
      <ShoesSuggestions>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{marginHorizontal: 10}}>
            <Shoes img={require('../../assets/1.png')} cost="R$ 140,99">
              Nike Aix Max Dia
            </Shoes>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Shoes img={require('../../assets/2.png')} cost="R$ 280,99">
              Nike Downshifter 10
            </Shoes>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Shoes img={require('../../assets/3.png')} cost="R$ 560,99">
              Nike Squidward Tentacles
            </Shoes>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Shoes img={require('../../assets/4.png')} cost="R$ 280,99">
              Nike Epic React Flyknit 2
            </Shoes>
          </View>
        </ScrollView>
      </ShoesSuggestions>
    </Container>
  );
}
