import { sendRequest } from "./dataAccess.js"

export const PartyForm = () => {
    let html =`
    <ul>
    <div class="field">
    <label class="label__party" for="partyDescription">Party Description</label>
    
            <input type="text" name="partyDescription" class="input" />
        </div>
        <div class="field">
            <label class="label__parent" for="parentName">Parent Name</label>
            
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label__child" for="childName">Child Name</label>
            
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label__address" for="address">Address</label>
            
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label__children" for="numberOfChildren">Number of Children Attending</label>
           
            <input type="number" name="numberOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label__partyLength" for="partyLength">Party Length in hours</label>
            
            <input type="float" name="partyLength" class="input" />
        </div>
        <div class="field">
            <label class="label__date" for="dateOfParty">Date of Party</label>
            
            <input type="date" name="dateOfParty" class="input" />
        </div>
        <div>
        <button class="button" id="submitRequest">Submit Request</button>
        </div>
        </ul>
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
