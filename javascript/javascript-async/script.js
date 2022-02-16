const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
console.log('funcionado')
const btn = document.getElementById('btn')
const IMGCAT = document.getElementById('cat') 



const getCats = async() => {
    try {
        const data = await fetch(BASE_URL)
        const json = await data.json()
        return json.webpurl
    } catch(e) {
        console.log(e.message)
    }
}

const loadIMG = async () => {
    IMGCAT.src = await getCats()
    
}

btn.addEventListener('click', loadIMG)

loadIMG()

