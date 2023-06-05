const express = require(`express`)
const cors = require(`cors`)

const app = express()

app.use(express.json())
app.use(cors())

let videoGame = {
    name: `Legend of Zelda`,
    releaseDate: `May 12th, 2023`,
    console: `Nintendo`,
    description: `the Legend of Zelda Tears of the Kingdom is an open world game where you play 
    as a hero named Link, saving the world from a great evil.`,
    imageUrl: `https://www.zeldadungeon.net/wp-content/uploads/2022/09/totk_1270x720.jpg`
}

let mario = {
    name: `Super Mario Bros`,
    releaseDate: `The 90s`,
    console: `NES`,
    genre: `You play as some plumbers who kick ass and take names`,
    imageUrl: `https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/640w/products/24509/35909/super-mario-bros__20293.1685647509.jpg?c=2`
}
app.get(`/api/test/`, (req, resp) =>{
    resp.status(200).send({name: `Tyler Aycock`})
})

app.get(`/game/:game`, (req, resp)=>{
    let { game } = req.params
    if(game === `zelda`){
        resp.status(200).send(videoGame)
    }
    else{
        resp.status(200).send(mario)
    }
})

//if you copyy the localhost:4000/api/test into your browser it will return the obj name: Tyler Aycock

app.listen(4000, console.log(`server running on localhost:4000`))
