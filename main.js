// Create instances of your classes here
const render = new Renderer
const apiManager = new APIManager(render)
// Render your page and create an on-click to generate a new user here
const rend = () => {
    apiManager.generateNewPage()
}
$(`body`).on(`click`, `#gen-page`, function () {
    rend()
})
$(`body`).on(`click`,`button`,function(){
    
})






rend()
























// apiManager.getUsers().then((data) => {
//     render.render(data)
// })