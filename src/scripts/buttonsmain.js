import { PartyForm } from "./PartyForm.js"

export const ButtonsTheClown =() => {
    return `
    <h1>The Buttons and Lollipop Show</h1>
    <section class="party-form">
        ${ PartyForm() }
    </section>
    <section class="parties">
        <h2>Party List</h2>

    </section>
    `
}