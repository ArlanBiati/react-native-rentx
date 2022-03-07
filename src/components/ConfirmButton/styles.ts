import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 80px;
  height: 56px;

  background-color: ${({ theme }) => theme.colors.shape_dark};

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium_inter};

  color: ${({ theme }) => theme.colors.shape};
`;