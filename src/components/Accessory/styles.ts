import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 109px;
  height: 92px;

  padding: 16px;
  margin-bottom: 8px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium_inter};
  font-size: ${RFValue(13)}px;

  color: ${({ theme }) => theme.colors.text};
`;