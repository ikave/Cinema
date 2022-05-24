import MainPage from '../../pages/main-page/main-page';

interface AppProps {
  title: string,
  genre: string,
  release: string,
  image: string,
  poster: string
}

function App ({title, genre, release, image, poster}: AppProps): JSX.Element {
  return (
    <MainPage title={title} genre={genre} release={release} image={image} poster={poster} />
  );
}

export default App;
