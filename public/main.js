const buttons = document.querySelectorAll(`button`)
const main = document.querySelector(`main`)


const getGame = evt => {
    console.log(`hit`)
    axios.get(`http://localhost:4000/game/${evt.target.id}`)
    .then(response =>{
        console.log(response.data) //this will print in the comp of inspect
        displayGame(response.data)
    })
    .catch(err => console.log(err))
}


const displayGame = (game) => {
    main.innerHTML = ""
    let {name,releaseDate,console,description,imageUrl} = game
    const gameCard = document.createElement(`div`)
    gameCard.innerHTML = `
        <h1>${name}</h1>
        <img src="${imageUrl}">
        <h2>Released on ${releaseDate} for the ${console}
        <p>${description}</p>
        `
        main.appendChild(gameCard)
}




for(let i = 0; i <buttons.length; i++){
    buttons[i].addEventListener(`click`, getGame)

}