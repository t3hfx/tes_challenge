export enum Screens {
  MoviesList = 'Movies list',
  Movie = 'Movie',
}

export type RootContainerStackParamList = {
  [Screens.MoviesList]: undefined;
  [Screens.Movie]: MovieParams;
};

export type MovieParams = {movieId?: string; title?: string};
