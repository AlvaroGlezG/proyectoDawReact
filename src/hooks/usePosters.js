
// ██╗░░░██╗░██████╗███████╗██████╗░░█████╗░░██████╗████████╗███████╗██████╗░░██████╗
// ██║░░░██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗██╔════╝
// ██║░░░██║╚█████╗░█████╗░░██████╔╝██║░░██║╚█████╗░░░░██║░░░█████╗░░██████╔╝╚█████╗░
// ██║░░░██║░╚═══██╗██╔══╝░░██╔═══╝░██║░░██║░╚═══██╗░░░██║░░░██╔══╝░░██╔══██╗░╚═══██╗
// ╚██████╔╝██████╔╝███████╗██║░░░░░╚█████╔╝██████╔╝░░░██║░░░███████╗██║░░██║██████╔╝
// ░╚═════╝░╚═════╝░╚══════╝╚═╝░░░░░░╚════╝░╚═════╝░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═════╝░

import { useEffect, useState } from 'react';
import getFilm from 'services/getFilms';

export function usePosters({ keyword } = {}){
    const [film, setFilm] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getFilm({ keyword: keyword }).then(film => {
            setFilm(film);
            setLoading(false);
        });
    },[setFilm]);
    return { film, loading };
}