import MovieList from '../../components/movie-list/movie-list';
import Footer from '../../layout/footer';
import Header from '../../layout/header';
import { FilmType } from '../../types/film';
interface MyListProps {
  films: FilmType[]
}

function MyList({films}: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <Header>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList films={films} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
