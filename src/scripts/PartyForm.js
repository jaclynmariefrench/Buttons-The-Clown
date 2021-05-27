import { sendRequest } from "./dataAccess.js"

export const PartyForm = () => {
    let html =`
        <div class="field">
            <label class="label__party" for="partyDescription">Party Description</label>
            <div></div>
            <input type="text" name="partyDescription" class="input" />
        </div>
        <div class="field">
            <label class="label__parent" for="parentName">Parent Name</label>
            <div></div>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label__child" for="childName">Child Name</label>
            <div></div>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label__address" for="address">Address</label>
            <div></div>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label__children" for="numberOfChildren">Number of Children Attending</label>
            <div></div>
            <input type="number" name="numberOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label__partyLength" for="partyLength">Party Length</label>
            <div></div>
            <input type="float" name="partyLength" class="input" />
        </div>
        <div class="field">
            <label class="label__date" for="dateOfParty">Date of Party</label>
            <div></div>
            <input type="date" name="dateOfParty" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "click",
    clickEvent => {
        if (clickEvent.target.id === "submitRequest") {
            const userPartyDescription = document.querySelector("input[name='partyDescription']").value
            const userParentName = document.querySelector("input[name='parentName']").value
            const userChildName = document.querySelector("input[name='childName']").value
            const userAddress = document.querySelector("input[name='address']").value
            const userNumberOfChildren = document.querySelector("input[name='numberOfChildren']").value
            const userPartyLength = document.querySelector("input[name='partyLength']").value
            const userDateOfParty = document.querySelector("input[name='dateOfParty']").value
        
            const dataToSendToAPI = {
                typeParty: userPartyDescription,
                parentName: userParentName,
                childName: userChildName,
                address: userAddress,
                numberOfChildren: userNumberOfChildren,
                partyLength: userPartyLength,
                dateOfParty: userDateOfParty

            }
        sendRequest(dataToSendToAPI)
        
        }
    }
)
