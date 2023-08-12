export default async function getDog() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}
