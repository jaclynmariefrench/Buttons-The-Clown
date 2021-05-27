import { deleteRequest, getRequests } from "./dataAccess.js"



export const PartyList = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(
                    (partyObject) => {
                        return `
                            <div>
                                <ul
                                    <div></div>
                                    Parent and Child name: ${partyObject.parentName} and ${partyObject.childName}
                                    <div></div>
                                    Party Type: ${partyObject.typeParty}
                                    <div></div>
                                    Address: ${partyObject.address}
                                    <div></div>
                                    Number of Children: ${partyObject.partyLength}
                                    <div></div>
                                    Time of Party: ${partyObject.dateOfParty}
                                    <div></div>
                                    Length of party: ${partyObject.partyLength}
                                    <div></div>
                                    <button class="request__delete" id="request--${partyObject.id}">Delete</button>
                                </ul>
                            </div>
                        `
                    }
                ).join("")
            }
        </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "click",
    clickEvent => {
        if(clickEvent.target.id.startsWith("request--")) {
            const [,requestId] = clickEvent.target.id.split("--")
            deleteRequest(parseInt(requestId))
        }
    }
)