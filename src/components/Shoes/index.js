import React from 'react';
import {Text} from 'react-native';

import {Container, ImgShoes, ShoesName, ShoesPrice} from './styles';

function filterDesc(desc) {
  if (desc.length < 23) {
    return desc;
  }

  return `${desc.substring(0, 20)}...`;
}
export default function Shoes(props) {
  return (
    <Container onPress={props.onClick}>
      <ImgShoes source={props.img} />
      <ShoesName>{filterDesc(props.children)}</ShoesName>
      <ShoesPrice>{props.cost}</ShoesPrice>
    </Container>
  );
}
