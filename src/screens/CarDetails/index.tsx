import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useTheme } from 'styled-components';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import { CarDTO } from '../../dtos/CarDTO';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import {
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  About,
  Footer
} from './styles';

interface NavigationProps{
  navigate:(
    screen: string,
    carObject:{
      car: CarDTO
    }
  ) => void,
  goBack: () => void
}
interface ParamsProps {
  car: CarDTO
}

export function CarDetails(){
  const theme = useTheme();
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute();
  const { car } = route.params as ParamsProps;

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 90],
        Extrapolate.CLAMP
      )
    }
  })

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 120],
        [1, 0],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, 50],
            [0, -15],
            Extrapolate.CLAMP
          )
        }
      ]
    }
  })

  function handleConfirmRental() {
    navigation.navigate('Scheduling', { car });
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>

    <StatusBar
      barStyle='dark-content'
      backgroundColor='transparent'
      translucent
    />
      <Animated.View
        style={[
          headerStyleAnimation,
          styles.header,
          { backgroundColor: theme.colors.background_secondary }
        ]}
      >
        <Header>
          <BackButton onPress={handleBack} />
        </Header>

        <CarImages>
          <Animated.View style={[sliderCarsStyleAnimation]}>
              <ImageSlider
                imagesUrl={car.photos}
              />
          </Animated.View>
        </CarImages>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          padding: 24,
          paddingTop: getStatusBarHeight() + 160
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{`R$ ${car.rent.price}`}</Price>
          </Rent>
        </Details>

        <Accessories>
          {
            car.accessories.map(accessory =>
              (
                <Accessory
                  key={accessory.type}
                  name={accessory.name}
                  icon={getAccessoryIcon(accessory.type)}
                />
              ))
          }
        </Accessories>

        <About>{car.about}</About>
        <About>{car.about}</About>
        <About>{car.about}</About>
        <About>{car.about}</About>
      </Animated.ScrollView>

      <Footer>
        <Button title='Escolher período do aluguel' onPress={handleConfirmRental} />
      </Footer>

    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  }
})