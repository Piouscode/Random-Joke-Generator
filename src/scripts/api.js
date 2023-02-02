import {apiUrl, jokeContainer} from "./variables.js";

export let getJoke = async () => {
    try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        console.log(data);
        jokeContainer.innerHTML = `${data.joke}`;
    } catch (error) {
        console.log(error);
    }
}
getJoke();