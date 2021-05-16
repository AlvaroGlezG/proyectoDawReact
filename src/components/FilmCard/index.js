import './FilmCard.css';

export default function FilmCard(poster, title) {

    console.log(poster, title)

    return (<div className="Cards">

        <div className="FilmCard">
            <a href="#">
            <img src={"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"} alt={"Interstellar"}></img>
            <div className="TitleContainer">
                <p>Interstellar</p>
            </div>
            </a>
        </div>

        <div className="FilmCard">
            <a href="#">
            <img src={"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"} alt={"The Dark Knigh"}></img>
            <div className="TitleContainer">
                <p>The Dark Knigh</p>
            </div>
            </a>
        </div>

        <div className="FilmCard">
            <a href="#">
            <img src={"https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"} alt={"Joker"}></img>
            <div className="TitleContainer">
                <p>Joker</p>
            </div>
            </a>
        </div>

        <div className="FilmCard">
            <a href="#">
            <img src={"https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"} alt={"The Wolf of Wall Street"}></img>
            <div className="TitleContainer">
                <p>The Wolf of Wall Street</p>
            </div>
            </a>
        </div>

        <div className="FilmCard">
            <a href="#">
            <img src={"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"} alt={"Parasite"}></img>
            <div className="TitleContainer">
                <p>Parasite</p>
            </div>
            </a>
        </div>

        <div className="FilmCard">
            <a href="#">
            <img src={"https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg"} alt={"The Intouchables"}></img>
            <div className="TitleContainer">
                <p>The Intouchables</p>
            </div>
            </a>
        </div>

        <div className="FilmCard">
            <a href="#">
            <img src={"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"} alt={"The Shawshank Redemption"}></img>
            <div className="TitleContainer">
                <p>The Shawshank Redemption</p>
            </div>
            </a>
        </div>

        <div className="FilmCard">
            <a href="/films/pulpfiction">
            <img src={"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"} alt={"Pulp Fiction"}></img>
            <div className="TitleContainer">
                <p>Pulp Fiction</p>
            </div>
            </a>
        </div>

    </div>);

}