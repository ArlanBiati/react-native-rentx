import React from 'react';

import { useTheme } from 'styled-components';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container
} from './styles';
import { TouchableOpacityProps } from 'react-native';

interface BackButtonProps extends TouchableOpacityProps {
  color?: string;
}

export function BackButton({ color, ...rest }: BackButtonProps){
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name='chevron-left'
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}