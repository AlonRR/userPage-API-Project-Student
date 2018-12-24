//This is the class that will manage all your APIs
//Each method should also invoke the renderer for its own section

class APIManager {
    constructor(render) {
        this.render = render
    }
    getUsers() {
        // Generate 7 new Users
        let users = []
        $.get(`https://randomuser.me/api/?results=7`, function (res) {
            res.results.forEach(result =>
                users.push({
                    name: `${result.name.title} ${result.name.first} ${result.name.last}`,
                    pic: result.picture.thumbnail,
                    location: {
                        city: result.location.city,
                        state: result.location.state
                    }
                }))
            render.renderUsers(users)
        })
    }
    getQuote() {
        // get a random quote and author
        $.get(`https://talaikis.com/api/quotes/random/`, function (res) {
            render.renderQuote({ quote: res.quote, author: res.author })
        })
    }
    getPokemon() {
        // Generate a random pokemon
        let number = Math.floor(Math.random()*151)
        $.get(`http://pokeapi.salestock.net/api/v2/pokemon-form/${number}/`, function (pokemon) {
            render.renderPokemon({ name: pokemon.pokemon.name, img: pokemon.sprites.front_default })
        })
    }
    getMeat() {
        // generate two paragraphs of text that are all meat
        $.get(`https://baconipsum.com/api/?type=all-meat&paras=2`, function (meat) {
            render.renderMeat(meat)
        })
    }
    generateNewPage() {
        // generate your new page here
        render.remover()
        apiManager.getUsers()
        apiManager.getMeat()
        apiManager.getPokemon()
        apiManager.getQuote()
    }
}