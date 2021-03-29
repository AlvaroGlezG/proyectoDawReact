import Poster from 'components/Poster/poster';
import Loading from 'components/Loading/loading';
import { usePosters } from 'hooks/usePosters'; 

import './movie_card.css'
import TitleAndOthers from 'components/TitleAndOthers/titleAndOthers';
import Plot from 'components/Plot/plot';

export default function Header(){
    const {film, loading} = usePosters();
    if((loading) || (film === undefined)){
        return <Loading />;
    }else{
        console.log(film)
        return (<>
            {/* <!--BOOTSTRAP--> */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossOrigin="anonymous"></script>
            {/* <!--FIN BOOTSTRAP--> */}

            <div className="movie-card">
                <div className="container">
                    <Poster poster={film.Poster}/>
                    <TitleAndOthers title={film.Title} rated={film.Rated} imdbRating={film.imdbRating}/>
                    <Plot plot={film.Plot}/>
                </div>
                {/* <!-- end container --> */}
            </div>
            {/* <!-- end movie-card --> */}
            {/* <!-- partial --> */}
            {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script> */}
        </>);
    }
}