export default async function getSpace() {
    const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=CRKl91Lv8vhE8vhgoYVgnfLbTCwzCtfytoQwnnrY&count=30")
    if(!res.ok){
        throw new Error('Failed to fetch data. refers this page')
    }
    return res.json()
}
