import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { FlatList, FlatListProps } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: flex-end;

  padding: 0 16px 32px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalCars = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular_inter};
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(
  FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>
).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showVerticalScrollIndicator: false
})``;