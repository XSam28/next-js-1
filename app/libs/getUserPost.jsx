export default async function getUserPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    if(!res.ok){
        throw new Error('failed to fetch user post. try again')
    }
    return res.json()
}
