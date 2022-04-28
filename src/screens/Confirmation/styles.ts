import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.header};

  padding-top: 96px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.bold_archivo};

  color: ${({ theme }) => theme.colors.shape};

  margin-top: 40px;
`;

export const Message = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular_inter};

  color: ${({ theme }) => theme.colors.text};

  text-align: center;
  line-height: ${RFValue(25)}px;

  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;

  align-items: center;

  margin: 80px 0;
`;
