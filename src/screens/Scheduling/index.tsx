import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { format } from 'date-fns';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import {
  Calendar,
  DayProps,
  genereteInterval,
  MarketDateProps
} from '../../components/Calendar';

import { CarDTO } from '../../dtos/CarDTO';
import { getPlatformDate } from '../../utils/getPlatformDate';

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

interface NavigationProps{
  navigate:(
    screen: string,
    carObject:{
      car: CarDTO;
      dates: string[];
    }
  ) => void,
  goBack: () => void;
}
interface RentalPeriodProps {
  startFormatted: string;
  endFormatted: string;
}

interface ParamsProps {
  car: CarDTO;
}

export function Scheduling(){
  const theme = useTheme();
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute();

  const { car } = route.params as ParamsProps;

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [marketDates, setMaketDates] = useState<MarketDateProps>({} as MarketDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps);

  function handleConfirmRental() {
    if(!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert('Selecione o intervalo para alugar.')
    } else {
      navigation.navigate('SchedulingDetails', {
        car,
        dates: Object.keys(marketDates)
      });
    }
  }

  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = genereteInterval(start, end);
    setMaketDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)),  'dd/MM/yyyy')
    });
  }

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
          onPress={handleBack}
        />
        <Title>
          Escolha uma {'\n'}
          data de inicio e{'\n'}
          fim do aluguel.
        </Title>

        <RentalPeriod>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>

        </RentalPeriod>
      </Header>

      <Content>
        <Calendar
          markedDates={marketDates}
          onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button title='Confirmar' onPress={handleConfirmRental} disabled={!rentalPeriod.startFormatted} />
      </Footer>

    </Container>
  );
}