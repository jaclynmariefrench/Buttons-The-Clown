import { ButtonsTheClown } from "./buttonsmain.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequest().then(
        ()=> {
            mainContainer.innerHTML = ButtonsTheClown()
        }
    )
}

render()