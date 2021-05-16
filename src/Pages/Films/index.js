// ███████╗██╗██╗░░░░░███╗░░░███╗░██████╗
// ██╔════╝██║██║░░░░░████╗░████║██╔════╝
// █████╗░░██║██║░░░░░██╔████╔██║╚█████╗░
// ██╔══╝░░██║██║░░░░░██║╚██╔╝██║░╚═══██╗
// ██║░░░░░██║███████╗██║░╚═╝░██║██████╔╝
// ╚═╝░░░░░╚═╝╚══════╝╚═╝░░░░░╚═╝╚═════╝░

import { useEffect, useState } from 'react';

import SideBar from 'components/SideBar/sideBar';
import Placeholder from 'components/Loader/index';
import FilmCard from 'components/FilmCard/index'

import getFilm from 'services/getFilms';

import 'bootstrap/dist/css/bootstrap.css';
import './films.css';

export default function Films() {

  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([
    {
      id: 'tt0816692',
      title: '',
      poster: '',
      description: ''
    },
    {
      id: 'tt0468569',
      title: '',
      poster: '',
      description: ''
    },
    {
      id: 'tt7286456',
      title: '',
      poster: '',
      description: ''
    },
    {
      id: 'tt6751668',
      title: '',
      poster: '',
      description: ''
    }])

  useEffect(() => {
    // setLoading(true);
    // for (let i = 0; i <= films.length - 1; i++) {
    //   getFilm({ keyword: films[i].id }).then(film => {

    //     (films[i].title = film.Title);
    //     (films[i].poster = film.Poster);
    //     (films[i].description = film.Plot);
    //   });
    // }
    // setLoading(false);
    // console.log(films)
  }, [setFilms]);


  return (<>
    <SideBar menuState={false} />
    <div className="container">
      <h1 className="title">Peliculas</h1>
      <FilmCard />
    </div>
  </>);
}