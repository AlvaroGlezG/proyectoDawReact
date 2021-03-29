import Poster from 'components/Poster/poster';
import Loading from 'components/Loading/loading';
import { usePosters } from 'hooks/usePosters'; 

import './movie_card.css'

export default function Header(){
    const {film, loading} = usePosters();
    if((loading) || (film === undefined)){
        return <Loading />;
    }else{
        // const poster = film.Poster;
        // console.log(poster);

        return (<>
            {/* <!--BOOTSTRAP--> */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossOrigin="anonymous"></script>
            {/* <!--FIN BOOTSTRAP--> */}

            <div className="movie-card">
                <div className="container">
                    <a href="/"><Poster poster={film.Poster}/></a>
                    <div className="hero">
                        <div className="details">
                            <div className="title1">The Hobbit <span>PG-13</span></div>
                            <span className="likes">109 likes</span>
                        </div>
                        {/* <!-- end details --> */}
                    </div>
                    {/* <!-- end hero --> */}
                    <div className="description">
                        <div className="column">
                            <p>Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug. Approached out of the blue by the wizard Gandalf the Grey, Bilbo finds himself joining a company of thirteen dwarves led
                                by the legendary warrior, Thorin Oakenshield. Their journey will take them into the Wild; through.Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug. Approached out of
                            </p>
                        </div>
                        {/* <!-- end column --> */}
                    </div>
                    {/* <!-- end description --> */}
                </div>
                {/* <!-- end container --> */}
            </div>
            {/* <!-- end movie-card --> */}
            {/* <!-- partial --> */}
            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        </>);
    }
}