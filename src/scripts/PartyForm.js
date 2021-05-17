
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