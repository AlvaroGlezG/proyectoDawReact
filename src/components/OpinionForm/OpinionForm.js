
// ░█████╗░██████╗░██╗███╗░░██╗██╗░█████╗░███╗░░██╗  ███████╗░█████╗░██████╗░███╗░░░███╗
// ██╔══██╗██╔══██╗██║████╗░██║██║██╔══██╗████╗░██║  ██╔════╝██╔══██╗██╔══██╗████╗░████║
// ██║░░██║██████╔╝██║██╔██╗██║██║██║░░██║██╔██╗██║  █████╗░░██║░░██║██████╔╝██╔████╔██║
// ██║░░██║██╔═══╝░██║██║╚████║██║██║░░██║██║╚████║  ██╔══╝░░██║░░██║██╔══██╗██║╚██╔╝██║
// ╚█████╔╝██║░░░░░██║██║░╚███║██║╚█████╔╝██║░╚███║  ██║░░░░░╚█████╔╝██║░░██║██║░╚═╝░██║
// ░╚════╝░╚═╝░░░░░╚═╝╚═╝░░╚══╝╚═╝░╚════╝░╚═╝░░╚══╝  ╚═╝░░░░░░╚════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝

// import { useState } from 'react';
import './form.css';
import './stars.css';
// import './stars_locked.css';

export default function OpinionForm() {
    // const [active, setActive] = useState(false);
    
    function HabilitaEstrellas(){
        // let head = document.querySelector('head');
        // if(active === true){
        //     let styles = document.querySelectorAll('style');
        //     // styles[styles.length - 1].remove();
        //     head.removeChild(styles[styles.length - 1]);
        //     setActive(false);
        // }
        // if(active === false){
        //     let form = document.querySelector('.form');
        //     head.appendChild = (import('./stars_locked.css'));
        //     setActive(true)
        // }
            
        // form.remove(form.lastChild)

        // let styles_length = styles.length;
        // setActive(!active);
        // console.log(active);
        // if(active === true){
        //     console.log('----APPEND / TRUE----')
        //     styles[styles_length - 1].append(import('./stars_locked.css'))
        //     console.log(document.querySelectorAll('style'));
        //     // innerHTML = import('./stars_locked.css')
        // }
        // if(active === false){
        //     console.log('----REMOVE / FALSE----')
        //     styles[11].remove();
        //     console.log(document.querySelectorAll('style'));
        // }
    }

    return (<>
        <div id="formulario">
            <form className="opiniones">
                <div className="form-group">
                    <label htmlFor="titulo">Titulo de la reseña</label>
                    <input type="text" className="form-control" name="titulo" id="titulo" placeholder="Titulo" disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="resena">Reseña</label>
                    <textarea id="resena" name="resena" rows="10" cols="100" className="form-control"
                        placeholder="Escribe aquí tu reseña..." disabled></textarea>
                </div>
                {/* <!-- partial:index.partial.html --> */}
                <p>Votación final</p>
                <span className="star-rating">
                    <input type="radio" name="rating" value="1"/><i></i>
                    <input type="radio" name="rating" value="2"/><i></i>
                    <input type="radio" name="rating" value="3"/><i></i>
                    <input type="radio" name="rating" value="4"/><i></i>
                    <input type="radio" name="rating" value="5"/><i></i>
                </span>
                {/* <!-- partial --> */}
                <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
                <script src="js/stars.js"></script>

                <br/><br/>
                <button type="submit" className="btn btn-secondary">Enviar</button>
                <button type="button" onClick={HabilitaEstrellas} className="btn btn-secondary">Habilitar/Deshabilitar</button>
            </form>
        </div>
    </>);
}