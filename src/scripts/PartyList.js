import { deleteRequest, getRequests } from "./dataAccess.js"



export const PartyList = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(
                    (partyObject) => {
                        return `
                            <div class="party-list">
                                <ul>
                                    <div class="list__labels">
                                    <b>Parent and Child name</b>: ${partyObject.parentName} and ${partyObject.childName}
                                    </div>
                                    <div class="list__labels">
                                    <b>Party Type</b>: ${partyObject.typeParty}
                                    </div>
                                    <div class="list__labels">
                                    <b>Address</b>: ${partyObject.address}
                                    </div>
                                    <div class="list__labels">
                                    <b>Number of Children</b>: ${partyObject.partyLength}
                                    </div>
                                    <div class="list__labels">
                                    <b>Time of Party</b>: ${partyObject.dateOfParty}
                                    </div>
                                    <div class="list__labels">
                                    <b>Length of party</b>: ${partyObject.partyLength} hours.
                                    </div>
                                    <div class="list__labels">
                                    <button class="request__delete" id="request--${partyObject.id}">Deny</button>
                                    </div>
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