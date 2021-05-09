
// ░█████╗░██████╗░██╗███╗░░██╗██╗░█████╗░███╗░░██╗  ███████╗░█████╗░██████╗░███╗░░░███╗
// ██╔══██╗██╔══██╗██║████╗░██║██║██╔══██╗████╗░██║  ██╔════╝██╔══██╗██╔══██╗████╗░████║
// ██║░░██║██████╔╝██║██╔██╗██║██║██║░░██║██╔██╗██║  █████╗░░██║░░██║██████╔╝██╔████╔██║
// ██║░░██║██╔═══╝░██║██║╚████║██║██║░░██║██║╚████║  ██╔══╝░░██║░░██║██╔══██╗██║╚██╔╝██║
// ╚█████╔╝██║░░░░░██║██║░╚███║██║╚█████╔╝██║░╚███║  ██║░░░░░╚█████╔╝██║░░██║██║░╚═╝░██║
// ░╚════╝░╚═╝░░░░░╚═╝╚═╝░░╚══╝╚═╝░╚════╝░╚═╝░░╚══╝  ╚═╝░░░░░░╚════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝

// import { useState } from 'react';
import './form.css';
import './stars.css';

export default function OpinionForm() {

    return (
        <div id="formulario">
            <form className="opiniones">
                <div className="form-group">
                    <h5><label htmlFor="titulo">Titulo de la reseña</label></h5>
                    <input type="text" className="form-control" name="titulo" id="titulo" placeholder="Titulo" />
                </div>
                <div className="form-group">
                    <h5><label htmlFor="resena">Reseña</label></h5>
                    <textarea id="resena" name="resena" rows="10" cols="100" className="form-control"
                        placeholder="Escribe aquí tu reseña..."></textarea>
                </div>
                {/* <!-- partial:index.partial.html --> */}
                <h5><p>Votación final</p></h5>
                <div class="main-container">
                    <div class="inner-content">
                        <input type="radio" name="starRating" id="star1" />
                        <label for="star1"><i class="fa fa-star-o"></i></label>
                        <input type="radio" name="starRating" id="star2" />
                        <label for="star2"><i class="fa fa-star-o"></i></label>
                        <input type="radio" name="starRating" id="star3" />
                        <label for="star3"><i class="fa fa-star-o"></i></label>
                        <input type="radio" name="starRating" id="star4" />
                        <label for="star4"><i class="fa fa-star-o"></i></label>
                        <input type="radio" name="starRating" id="star5" />
                        <label for="star5"><i class="fa fa-star-o"></i></label>
                    </div>
                </div>
                {/* <!-- partial --> */}
                <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
                <script src="js/stars.js"></script>

                <br /><br />
                <button type="submit" className="btn btn-secondary">Enviar</button>
            </form>
        </div>
    );
}