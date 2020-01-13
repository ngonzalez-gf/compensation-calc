const url = 'https://jsonplaceholder.typicode.com/todos/1'

function apiInfo() {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(json => console.log(json))
}

export default {
    apiInfo
}