import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: ButtonProps){
  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
}