import React from 'react';

import {
  Container,
  Title
} from './styles';

interface ButtonProps {
  title: string;
  color?: string;
  onPress?: () => void;
}

export function Button({ title, color, onPress, ...rest }: ButtonProps){
  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
}