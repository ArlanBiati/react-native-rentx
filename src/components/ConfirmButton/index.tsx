import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title
} from './styles';

interface ConfirmButtonProps extends TouchableOpacityProps {
  title: string;
}

export function ConfirmButton({ title, ...rest }: ConfirmButtonProps){
  return (
    <Container {...rest}>
      <Title>{ title }</Title>
    </Container>
  );
}