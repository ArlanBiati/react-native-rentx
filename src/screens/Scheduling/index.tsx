import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';

import ArrowSvg from '../../assets/arrow.svg'

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles';

export function Scheduling(){
  const theme = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <Header>
        <BackButton
          color={theme.colors.shape}
          onPress={() => {}}
        />
        <Title>
          Escolha uma {'\n'}
          data de inicio e{'\n'}
          fim do aluguel.
        </Title>

        <RentalPeriod>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false} />
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false} />
          </DateInfo>

        </RentalPeriod>
      </Header>

      <Content></Content>

      <Footer>
        <Button title='Confirmar' />
      </Footer>

    </Container>
  );
}