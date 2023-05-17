import { EastButton, NorthButton, SouthButton, WestButton } from "./SceneControl.js"

export const ShepherdBoy = () => {

    const descriptionHTML = `
    <div class="description">You decide to checkout the mysterious plains.
    You bask in your ability to exercise free will.
    You get the feeling some man named Sartre would be proud.
    But really these plains are quite boring aren't they?
    "Hello," a young boy says, tearing you out of your thoughts.
    "I've never seen you before," the boy says.
    "I don't usually come this way," you reply.
    "I'm supposed to be watching these sheep, but it's sooooooo boooooring. We should play instead."
    You are reminded you were on your own errand, but can't help yourself from asking, "Like what?"
    "I know a really fun game where we tell the villagers there's a wolf, even though there isn't one. They get so riled up, it's hilarious!"
    The boy starts to laugh a bit just thinking about it
    You could go with the boy down to his village
    But you could also head back to the path and do your duty as a caring granddaughter</div>
    `

    const northButton = NorthButton()
    const eastButton = EastButton()
    const southButton = SouthButton()
    const westButton = WestButton()
        
    const Buttons = `<div class="button-container">
    ${northButton}
    <div class="button-center">${eastButton}${westButton}</div>
    ${southButton}</div>`
    

    const composedHTML = `
    ${descriptionHTML}
    <div class="choose">So...which way would you like to go?</div>
    ${Buttons}
    `
    
        container.innerHTML = composedHTML

    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}