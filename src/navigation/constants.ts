export enum Screens {
  CarList = 'Car list',
  Car = 'Car',
}

export type RootContainerStackParamList = {
  [Screens.CarList]: undefined;
  [Screens.Car]: CarParams;
};

export type CarParams = {carId?: string; title?: string};
