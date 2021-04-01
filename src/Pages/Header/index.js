
// ██╗░░██╗███████╗░█████╗░██████╗░███████╗██████╗░
// ██║░░██║██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗
// ███████║█████╗░░███████║██║░░██║█████╗░░██████╔╝
// ██╔══██║██╔══╝░░██╔══██║██║░░██║██╔══╝░░██╔══██╗
// ██║░░██║███████╗██║░░██║██████╔╝███████╗██║░░██║
// ╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░╚══════╝╚═╝░░╚═╝


import Poster from 'components/Poster/poster';
import Loading from 'components/Loading/loading';
import TitleAndOthers from 'components/TitleAndOthers/titleAndOthers';
import Plot from 'components/Plot/plot';
import LogInLogOut from 'components/LogInLogOut/LogInLogOut';

import { usePosters } from 'hooks/usePosters'; 

import './movie_card.css';

export default function Header(){
    const {film, loading} = usePosters();
    
    if((loading) || (film === undefined)){
        return <Loading />;
    }else{
        // console.log(film)
        return (<>
            <LogInLogOut />
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