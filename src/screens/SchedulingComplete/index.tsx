import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

export function SchedulingComplete(){
  const { width } = useWindowDimensions();

  const navigation = useNavigation()

  function handleConfirm() {
    navigation.navigate('Home' as never)
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
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir{'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title='Ok' onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}