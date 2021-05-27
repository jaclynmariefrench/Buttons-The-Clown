const applicationState = {
    requests: [],
}

const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
    .then(
        response => response.json()
    )
    .then(
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
    return fetch (`${API}/requests`, fetchOptions)
    .then(response => response.json()) 
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const getRequests =() => {
    return [...applicationState.requests]
}