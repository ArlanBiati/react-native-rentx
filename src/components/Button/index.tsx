import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  Title
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({ title, color, disabled = false, loading = false, ...rest }: ButtonProps){
  const theme = useTheme();

  return (
    <Container {...rest} color={color} disabled={disabled} style={{ opacity: (disabled === true || loading === true) ? 0.5 : 1 }} >
      { loading ?
        <ActivityIndicator color={theme.colors.shape} />
        :
        <Title>{title}</Title>
      }
    </Container>
  );
}