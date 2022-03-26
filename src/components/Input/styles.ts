import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;

  margin-bottom: 8px;

  ${({ isFocused, theme }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `}
`;

export const IconContainer = styled.View`
  width: 55px;
  height: 55px;

  justify-content: center;
  align-items: center;

  margin-right: 2px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const InputText = styled.TextInput`
  flex: 1;

  font-family: ${({ theme }) => theme.fonts.regular_inter};
  font-size: ${RFValue(15)}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};

  padding: 0 23px;
`;