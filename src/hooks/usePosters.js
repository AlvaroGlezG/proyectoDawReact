
// ██╗░░░██╗░██████╗███████╗██████╗░░█████╗░░██████╗████████╗███████╗██████╗░░██████╗
// ██║░░░██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗██╔════╝
// ██║░░░██║╚█████╗░█████╗░░██████╔╝██║░░██║╚█████╗░░░░██║░░░█████╗░░██████╔╝╚█████╗░
// ██║░░░██║░╚═══██╗██╔══╝░░██╔═══╝░██║░░██║░╚═══██╗░░░██║░░░██╔══╝░░██╔══██╗░╚═══██╗
// ╚██████╔╝██████╔╝███████╗██║░░░░░╚█████╔╝██████╔╝░░░██║░░░███████╗██║░░██║██████╔╝
// ░╚═════╝░╚═════╝░╚══════╝╚═╝░░░░░░╚════╝░╚═════╝░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═════╝░

import { useEffect, useState } from 'react';
import getFilm from 'services/getFilms';

export function usePosters(){
    const [film, setFilm] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getFilm().then(film => {
            setFilm(film);
            setLoading(false);
        });
    },[setFilm]);
// console.log(film);
    return { film, loading };
}