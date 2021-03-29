const apiKey = 'b5466b91';

export default async function GetFilm({ keyword = 'tt1170358'} = {}) {
    const apiURL = `https://www.omdbapi.com/?i=${keyword}&apikey=${apiKey}`;

    const respApi = await fetch(apiURL)
        .then((res) => res.json())
        .then(resp => {
            return resp;
        });
    return respApi;
    // respApi.then(val => console.log(val));
}