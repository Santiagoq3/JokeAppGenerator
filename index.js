const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political&type=single";
const button = document.getElementById("button");
const joke = document.querySelector(".container__joke");

button.addEventListener("click", generarJoke);

function generarJoke(){
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data.joke)
        joke.innerHTML = data.joke
    })
    .catch((err)=>{
        console.log(err)
    })
}
