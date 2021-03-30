
// ██╗░░██╗███████╗░█████╗░██████╗░███████╗██████╗░
// ██║░░██║██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗
// ███████║█████╗░░███████║██║░░██║█████╗░░██████╔╝
// ██╔══██║██╔══╝░░██╔══██║██║░░██║██╔══╝░░██╔══██╗
// ██║░░██║███████╗██║░░██║██████╔╝███████╗██║░░██║
// ╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░╚══════╝╚═╝░░╚═╝

import {Link} from 'wouter';

import Poster from 'components/Poster/poster';
import Loading from 'components/Loading/loading';
import TitleAndOthers from 'components/TitleAndOthers/titleAndOthers';
import Plot from 'components/Plot/plot';

import { usePosters } from 'hooks/usePosters'; 

import './movie_card.css';
import './loginText.css';

export default function Header(){
    const {film, loading} = usePosters();
    if((loading) || (film === undefined)){
        return <Loading />;
    }else{
        console.log(film)
        return (<>
            <Link to="/login">
                <img className="login" alt="imagen de login" src="https://img.icons8.com/pastel-glyph/64/ffffff/login-rounded-right.png"/>
                <h4 className="loginText">LogIn</h4>
            </Link>
            <div className="movie-card">
                <div className="container">
                    <Poster poster={film.Poster}/>
                    <TitleAndOthers title={film.Title} rated={film.Rated} imdbRating={film.imdbRating}/>
                    <Plot plot={film.Plot}/>
                </div>
            </div>
        </>);
    }
}