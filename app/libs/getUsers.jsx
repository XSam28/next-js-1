export default async function getUsers(id) {
const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
if(!res.ok){
    throw new Error('failed to fetch data')
}
return await res.json()
}