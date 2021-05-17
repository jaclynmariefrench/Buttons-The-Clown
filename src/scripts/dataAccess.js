const applicationState = {
    requests : [],
}

const API = "http://localhost:8080"

const mainContainer = document.querySelector("#container")

export const fetchRequests = () => {
    return fetch (`${API}/requests`)
    .then (
        party => party.json()
    )
    .then (
        (partyRequests) => {
            applicationState.requests = partyRequests
        }
    )
}

export const sendRequest = (userPartyRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(userPartyRequest)
    }
    return fetch (`${API}/request`, fetchOptions)
    .then(response => response.json()) 
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const getRequests =() => {
    return [...applicationState.requests]
}