import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ConfirmButton } from '../../components/ConfirmButton';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';

interface ConfirmationParams {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation(){
  const { width } = useWindowDimensions();

  const navigation = useNavigation();
  const route = useRoute();
  const { title, message, nextScreenRoute } = route.params as ConfirmationParams;

  function handleConfirm() {
    navigation.navigate(nextScreenRoute as never);
  }

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <LogoSvg
        width={width}
      />

      <Content>
        <DoneSvg
          width={80} height={80}
        />
        <Title>{title}</Title>

        <Message>
          {message}
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title='Ok' onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}