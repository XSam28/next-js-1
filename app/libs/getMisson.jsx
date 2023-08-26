export default async function getMission(){
    const res = await fetch('https://images-api.nasa.gov/search?q=mission&media_type=image')
    if(!res.ok){
        throw new Error('gak bisa ngambil data cyuk')
    }
    return await res.json();
}