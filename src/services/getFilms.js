const apiKey = 'b5466b91';

export default async function GetFilm({ keyword = 'tt7286456'} = {}) {
    const apiURL = `https://www.omdbapi.com/?i=${keyword}&plot=full&apikey=${apiKey}`;

    const respApi = await fetch(apiURL)
        .then((res) => res.json())
        .then(resp => {
            return resp;
        });
    return respApi;
}