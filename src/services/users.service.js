export const usersQuery = () => {
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
    })
}