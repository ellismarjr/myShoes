import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
  background: #fff;
`;

export const ImgShoes = styled.Image`
  width: 100%;
`;

export const ShoesPrice = styled.Text`
  font-size: 24px;
  font-family: 'Anton-Regular';
  padding: 0 2%;
`;
export const ShoesName = styled.Text`
  font-size: 30px;
  font-family: 'Anton-Regular';
  color: #cececf;
  padding: 0 2%;
`;

export const DotContainer = styled.View`
  flex-direction: row;
  margin: 7% 0;
`;

export const SizeShoesContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const SizeShoesList = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))`
  margin-bottom: 10px;
`;

export const ShoesInfo = styled.View`
  margin: 2%;
`;

export const Shoes = styled.Text`
  font-size: 22px;
  margin: 2% 0;
`;

export const ShoesDescription = styled.Text`
  font-size: 16px;
  line-height: 25px;
  margin: 2% 0;
`;

export const ShoesCategory = styled.Text`
  font-size: 16px;
  line-height: 25px;
`;

export const ShoesMaterial = styled.Text`
  font-size: 16px;
  line-height: 25px;
`;

export const Separator = styled.View`
  border-bottom-color: #ddd;
  border-width: 1px;
  margin: 2% 0;
`;
