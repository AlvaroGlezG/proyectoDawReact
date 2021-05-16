import SideBar from 'components/SideBar/sideBar';
import Poster from 'components/Poster/poster';
import TitleAndOthers from 'components/TitleAndOthers/titleAndOthers';
import Plot from 'components/Plot/plot';

import './movie_card.css'

export default function FilmsReviews() {
    return (<>
        <SideBar menuState={false} />
        <div className="movie-card">
            <div className="container">
                <Poster poster={"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"} />
                <div className="cartel">
                    <div className="details">
                        <div className="title1">{"Pulp Fiction"} <span>{"+18"}</span></div>
                        <span className="likes">{"8,9"}</span>
                    </div>
                    {/* <!-- end details --> */}
                </div>
                {/* <!-- end hero --> */}
                <Plot plot={"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."} />
            </div>
        </div>
        
        <div className="userCard">
            <div className="userImage">
                <img src={"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv"}></img>
                <p className="userName">wolvesrug</p>
            </div>
            <div className="userReview">
                <p className="userTitle">Simply The Best </p>
                <p className="userReview">To put this in context, I am 34 years old and I have to say that this is the best film I have seen without doubt and I don't expect it will be beaten as far as I am concerned. Obviously times move on, and I acknowledge that due to its violence and one particularly uncomfortable scene this film is not for everyone, but I still remember watching it for the first time, and it blew me away. Anyone who watches it now has to remember that it actually changed the history of cinema. In context- it followed a decade or more of action films that always ended with a chase sequence where the hero saved the day - you could have written those films yourself. Pulp had you gripped and credited the audience with intelligence. There is not a line of wasted dialogue and the movie incorporates a number of complexities that are not immediately obvious. It also resurrected the career of Grease icon John Travolta and highlighted the acting talent of Samuel L Jackson. There are many films now that are edited out of sequence and have multiple plots etc but this is the one they all want to be, or all want to beat, but never will.</p>
            </div>
        </div>

        <div className="userCard">
            <div className="userImage">
                <img src={"data:image/png;base64,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"}></img>
                <p className="userName">Valtzy</p>
            </div>
            <div className="userReview">
                <p className="userTitle">A Masterpiece </p>
                <p className="userReview">In my humble opinion, I believe that this is Tarentino's finest movie. As I grew older and older I've come to realize that this masterpiece from the 90s aged like fine wine. It's easily one of the most rewatchable movies considering it's filled with an insane amount of quotables, great cinematography and most importantly, charming characters that will stand the test of time.

                I truly believe that this movie is a work of art, the way Tarentino handpicked the songlist for the soundtrack helped elevate every single scene of the movie to a whole new level.

To cut this short, this movie is easily one of the best movies ever made, and my personal favorite movie and I urge anyone who hasn't seen it to give it a shot.</p>
            </div>
        </div>

        <div className="userCard">
            <div className="userImage">
                <img src={"https://competenciasdelsiglo21.com/wp-content/uploads/2019/04/disc-perfil-c-azul-948x640.jpg"}></img>
                <p className="userName">gogoschka-1</p>
            </div>
            <div className="userReview">
                <p className="userTitle">The rebirth of a genre – and film history </p>
                <p className="userReview">I can only speak for myself, but I had never seen anything as stylish, cleverly constructed, well written and electrifying as this milestone when I first saw it in 1994. What really pulled me in right from the start is what we've now come to know as a Tarantino trademark: the dialogue. When gangsters Jules and Vincent talk to each other (or all the other characters, for that matter) there is a natural flow, a sense of realism and yet something slightly over the top and very theatrical about their lines – it's a mixture that immediately grabs your attention (even if it's just two dudes talking about what kind of hamburger they prefer, or contemplating the value of a foot-massage). Then there's the music: the songs Tarantino chose for his masterpiece fit their respective scenes so perfectly that most of those pieces of music are now immediately associated with 'Pulp Fiction'. And the narrative: the different story lines that come together, the elegantly used flashbacks, the use of "chapters" – there is so much playful creativity at play here, it's just a pure joy to watch.

If you're a bit of a film geek, you realize how much knowledge about film and love for the work of other greats – and inspiration from them - went into this (Leone, DePalma, Scorsese and, of course, dozens of hyper-stylized Asian gangster flicks), but to those accusing Tarantino of copying or even "stealing" from other film-makers I can only say: There has never been an artist who adored his kind of art that was NOT inspired or influenced by his favorite artists. And if you watch Tarantino's masterpiece today, it's impossible not to recognize just what a breath of fresh air it was (still is, actually). Somehow, movies - especially gangster films - never looked quite the same after 'Pulp Fiction'. Probably the most influential film of the last 20 years, it's got simply everything: amazing performances (especially Sam Jackson); it features some of the most sizzling, iconic dialogue ever written; it has arguably one of the best non-original soundtracks ever - it's such a crazy, cool, inspirational ride that you feel dizzy after watching it for the first time. It's – well: it's 'Pulp Fiction'. 10 stars out of 10.</p>
            </div>
        </div>
    </>);
}