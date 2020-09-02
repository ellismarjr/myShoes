import React from 'react';
import {Text} from 'react-native';

import {Container, SizeShoesText} from './styles';

export default function SizeShoesButton(props) {
  return (
    <Container style={{backgroundColor: props.bgColor || '#FFF'}}>
      <SizeShoesText style={{color: props.color || '#c9c'}}>
        {props.children}
      </SizeShoesText>
    </Container>
  );
}
