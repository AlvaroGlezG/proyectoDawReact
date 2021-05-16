const apiKey = 'b5466b91';

// const fromApiResponseToPosters = apiResponse => {
//     const { Search = [] } = apiResponse;

//     if (Array.isArray(Search)) {
//         const posters = Search.map(poster => {
//             const { Poster, Title, imdbID } = poster;
//             return { Poster, Title, imdbID };
//         })
//         return posters;
//     }

//     return [];
// }

export default async function GetFilm({ keyword = 'tt4154796'} = {}) {
    const apiURL = `https://www.omdbapi.com/?i=${keyword}&plot=full&apikey=${apiKey}`;

    const respApi = await fetch(apiURL)
        .then((res) => res.json())
        .then(resp => {
            return resp;
        });
    return respApi;
}
