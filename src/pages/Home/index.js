import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Shoes from '../../components/Shoes';

import {
  Container,
  Header,
  ImgHeader,
  OptionContainer,
  OptionText,
  FilterButton,
  OptionSeparator,
  OptionGender,
  Separator,
  ProductScrollList,
  ProductList,
  Product,
} from './styles';
import imgHeader from '../../assets/banner.png';

export default function Home() {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <ImgHeader source={imgHeader} />
        <OptionContainer>
          <OptionText>TÊNIS</OptionText>
          <OptionSeparator>•</OptionSeparator>
          <OptionGender>MASCULINO</OptionGender>
          <FilterButton>
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </FilterButton>
        </OptionContainer>
      </Header>

      <Separator />

      <ProductScrollList>
        <OptionText>LANÇAMENTOS</OptionText>
        <ProductList>
          <Shoes
            img={require('../../assets/1.png')}
            cost="R$ 140,99"
            onClick={() => navigation.navigate('Detail')}>
            Nike Aix Max Dia
          </Shoes>
          <Shoes
            img={require('../../assets/2.png')}
            cost="R$ 280,99"
            onClick={() => navigation.navigate('Detail')}>
            Nike Downshifter 10
          </Shoes>
        </ProductList>
        <ProductList>
          <Shoes img={require('../../assets/3.png')} cost="R$ 560,99">
            Nike Squidward Tentacles
          </Shoes>
          <Shoes img={require('../../assets/4.png')} cost="R$ 280,99">
            Nike Epic React Flyknit 2
          </Shoes>
        </ProductList>
        <ProductList>
          <Shoes img={require('../../assets/5.png')} cost="R$ 340,99">
            Nike Joyride Run Flyknit
          </Shoes>
          <Shoes img={require('../../assets/6.png')} cost="R$ 580,99">
            Nike Air JR.
          </Shoes>
        </ProductList>
      </ProductScrollList>
    </Container>
  );
}
