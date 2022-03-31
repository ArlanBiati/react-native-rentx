import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
interface ButtonColor {
  color?: string;
}

interface ButtonTextProps {
  light: boolean;
}

export const Container = styled.TouchableOpacity<ButtonColor>`
  width: 100%;

  padding: 19px;
  margin-bottom: 8px;

  align-items: center;
  justify-content: center;

  background-color: ${({ color, theme }) => color ? color : theme.colors.main};
`;

export const Title = styled.Text<ButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.medium_inter};
  font-size: ${RFValue(15)}px;

  color: ${({ theme, light }) => light ? theme.colors.header : theme.colors.shape};
`;