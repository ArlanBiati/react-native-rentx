
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { Car as ModelCar } from '../../database/model/Car';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage
} from './styles';

interface CarProps extends TouchableOpacityProps {
  data: ModelCar;
}

export function Car({ data, ...rest }: CarProps){
  const netInfo = useNetInfo();

  const MotorIcon = getAccessoryIcon(data.fuel_type)

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{ netInfo.isConnected === true ? `R$ ${data.price}` : '...' }</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage
        resizeMode='contain'
        source={{ uri: data.thumbnail }}
      />
    </Container>
  );
}