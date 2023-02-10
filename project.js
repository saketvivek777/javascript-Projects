const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")
const apikey = "cF//Pmb2enCPBy+8u9buoA==6uujS4Ou7O5XbC6K";

const options = {
    method: "GET",
    headers:
    {
        "X-Api-Key": apikey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getjoke() {
    try {
        jokeEl.innerText = "Updating...";
        btnEl.diabled = true;
        btnEl.innerText = "Loading";
        const response = await fetch(apiURL, options);
        const data = await response.json();
        btnEl.diabled = true;
        btnEl.innerText = "Tell me a joke";

        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "Error shown try again"
        btnEl.diabled=false;
        btnEl.innerText = "Tell me a joke";
    }


}



btnEl.addEventListener("click", getjoke)