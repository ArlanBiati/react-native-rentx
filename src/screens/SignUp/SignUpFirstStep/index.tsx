import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle
} from './styles';

export function SignUpFirstStep(){
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <Header>
        <BackButton
          onPress={handleBack}
        />
        <Steps>
          <Bullet active />
          <Bullet active={false} />
        </Steps>
      </Header>

      <Title>
        Crie sua{'\n'}conta
      </Title>

      <SubTitle>
        Faça seu cadastro de{'\n'}forma rapida e facil!
      </SubTitle>

      <Form>
        <FormTitle>1. Dados</FormTitle>
      </Form>
    </Container>
  );
}