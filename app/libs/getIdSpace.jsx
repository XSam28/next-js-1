export default async function getIdSpace(date){
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=CRKl91Lv8vhE8vhgoYVgnfLbTCwzCtfytoQwnnrY&date=${date}`)
    if(!res.ok){
        throw new Error('failed fetch ID')
    }
    return res.json()
}