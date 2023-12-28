export enum Screens {
  CarList = 'Car list',
  Car = 'Car',
}

export type RootContainerStackParamList = {
  [Screens.CarList]: undefined;
  [Screens.Car]: CarParams;
};

export type CarParams = {
  title?: string;
  image?: string;
  description?: string;
  rating?: string;
};
