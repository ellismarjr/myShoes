import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  width: ${Dimensions.get('window').width * 0.05};
  height: ${Dimensions.get('window').width * 0.05};
  border-radius: ${(Dimensions.get('window').width * 0.05) / 2};
  margin: 0 2.5%;
`;
