import React from 'react';

import {Container} from './styles';

export default function Dot(props) {
  return <Container style={{backgroundColor: props.color}}></Container>;
}
