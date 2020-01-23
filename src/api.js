const todosUrl = 'https://jsonplaceholder.typicode.com/todos/1';
const countriesUrl = 'https://restcountries.eu/rest/v2/all';

async function apiInfo() {
    // const response = await fetch(`https://urljsonplaceholder.typicode.com/posts`)
    const response = await fetch(todosUrl)
    const json = await response.json()
    // console.log(json)
    return json
}



async function apiCountries() {
    console.log('api@apiCountries')
    // Consumir API
    const response = await fetch(countriesUrl)
    // Obtener respuesta de la API
    const data = await response.json()
    // console.log(data)
    console.log(data[0].name)
    console.log(data[0].capital)

    // Retornar los datos
    return data
}

export default {
    apiInfo,
    apiCountries
}