import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { PasswordInput } from '../../../components/PasswordInput';

import {
  Container,
  Header,
  Steps,
  Form,
  FormTitle
} from './styles';

interface UserParams {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  }
}

interface NavigationProps{
  navigate:(
    screen: string,
    confirmationObject:{
      nextScreenRoute: string;
      title: string;
      message: string;
    }
  ) => void,
  goBack: () => void;
}

export function SignUpSecondStep(){
  const theme = useTheme();
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute();

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { user } = route.params as UserParams;

  function handleBack() {
    navigation.goBack();
  }

  function handleRegister() {
    if(!password || !passwordConfirm) {
      return Alert.alert('Informe a senha e a confirmação');
    }

    if(password != passwordConfirm) {
      return Alert.alert('As senhas devem ser iguais');
    }

    navigation.navigate('Confirmation', {
      nextScreenRoute: 'SignIn',
      title: 'Conta Criada!',
      message: `Agora é só fazer login${'\n'}e aproveitar.`
    });
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <BackButton
            onPress={handleBack}
          />
          <Steps>
            <Bullet />
            <Bullet active />
          </Steps>
        </Header>

        <Form>
          <FormTitle>2. Senha</FormTitle>

          <PasswordInput
            iconName='lock'
            placeholder='Senha'
            onChangeText={setPassword}
            value={password}
          />

          <PasswordInput
            iconName='lock'
            placeholder='Repetir senha'
            onChangeText={setPasswordConfirm}
            value={passwordConfirm}
          />

        </Form>

        <Button
          title='Cadastrar'
          color={theme.colors.success}
          onPress={handleRegister}
        />
      </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}