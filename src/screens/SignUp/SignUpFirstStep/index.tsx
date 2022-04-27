import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle
} from './styles';

interface NavigationProps{
  navigate:(
    screen: string,
    userObject:{
      user: {
        name: string;
        email: string;
        driverLicense: string;
      }
    }
  ) => void,
  goBack: () => void
}

export function SignUpFirstStep(){
  const navigation = useNavigation<NavigationProps>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [driverLicense, setDriverLincense] = useState('');

  async function handleNextStep() {
    try {
      const schema = Yup.object({
        driverLicense: Yup.string()
          .required('CNH é obrigatória'),

        email: Yup.string()
          .email('E-mail inválido')
          .required('Email é obrigatório'),

        name: Yup.string()
        .required('Nome é obrigatório')
      })

      const data = { name, email, driverLicense };
      await schema .validate(data);

      navigation.navigate('SignUpSecondStep' as never, { user: data });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert('Opa', error.message);
      }
    }
  }

  function handleBack() {
    navigation.goBack();
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
              <Bullet active />
              <Bullet />
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
            <Input
              iconName='user'
              placeholder='Nome'
              onChangeText={setName}
              value={name}
            />

            <Input
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              onChangeText={setEmail}
              value={email}
              autoCapitalize='none'
            />

            <Input
              iconName='credit-card'
              placeholder='CNH'
              keyboardType='numeric'
              onChangeText={setDriverLincense}
              value={driverLicense}
            />
          </Form>

          <Button
            title='Próximo'
            onPress={handleNextStep}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}