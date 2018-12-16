// Fill in the functions for your Renderer Class

class Renderer {
    constructor(){
    }
    upperCase(text){
        if(text==null){return}
        text = text.split(` `)
        let newText=[]
        text.forEach(word=>newText.push(word.slice(0,1).toUpperCase() + word.slice(1)))
        return newText.toString().replace(/,/gi,` `)
    }
    renderUsers(users) {
        users.forEach(user=>user.name = this.upperCase(user.name))
        users.forEach(user=>user.location.city = this.upperCase(user.location.city))
        users.forEach(user=>user.location.state = this.upperCase(user.location.state))
        let user = users.splice(0,1)
        // user[0].toUpercase(0,1)
        this.appender(`user`,user[0])
        this.renderFriends(users)
    }
    renderFriends(users) {
        users.forEach(user=>this.appender(`friends`,user))
    }
    renderQuote(quoteInfo) {
        this.appender(`quote`,quoteInfo)
    }
    renderPokemon(pokemonInfo) {
        this.appender(`pokemon`,pokemonInfo)
    }
    renderMeat(meatText) {
        meatText.forEach(text=>this.appender(`meat`,{text}))
    }
    appender(name,data){
        let source = document.getElementById(`${name}-template`).innerHTML
        let template = Handlebars.compile(source)
        let newHTML = template(data)
        $(`.${name}-container`).append(newHTML)
    }
    remover(){
        let names = [`user`,`friends`,`quote`,`pokemon`,`meat`]
        names.forEach(name=>$(`.${name}-container`).empty())
    }
}
