import React from 'react';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';

import {
  Container,
  Name
} from './styles';

interface AccessoryProps {
  name: string;
  icon: React.FC<SvgProps>;
}

export function Accessory({ name, icon: Icon }: AccessoryProps){
  const theme = useTheme();
  return (
    <Container>
      <Name>{name}</Name>
      <Icon
        width={32}
        height={32}
        fill={theme.colors.header}
      />
    </Container>
  );
}