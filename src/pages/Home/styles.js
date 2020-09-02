import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: #fff;
`;

export const Header = styled.View`
  margin-bottom: 8px;
`;

export const ImgHeader = styled.Image`
  width: 100%;
`;

export const OptionContainer = styled.View`
  flex-direction: row;
  margin: 5%;
`;

export const OptionText = styled.Text`
  font-family: 'Anton-Regular';
  font-size: 26px;
  margin: 0 1%;
`;

export const FilterButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  align-self: center;
`;

export const OptionGender = styled.Text`
  font-family: 'Anton-Regular';
  font-size: 26px;
  margin: 0 1%;
  color: #cececf;
`;

export const OptionSeparator = styled.Text`
  color: #cececf;
  font-size: 26px;
  font-family: 'Anton-Regular';
  margin: 0 1%;
`;

export const Separator = styled.View`
  border-bottom-color: #d8d8d8;
  border-bottom-width: 2px;
`;

export const ProductScrollList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ProductList = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const Product = styled.View``;
