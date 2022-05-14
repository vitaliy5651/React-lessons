export const usersQuery = () => {
    return fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'GET'
    })
}