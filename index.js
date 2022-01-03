const button = document.querySelector('.getJoke')
const buttonSpan = button.querySelector('.jokeText')
const jokeHolder = document.querySelector('.joke p')
const endpoint = "https://icanhazdadjoke.com"
const loader = document.querySelector(".loader");

async function fetchJoke() {
  // turn loader on when fetching data
  loader.classList.remove("hidden");

  const response = await fetch(endpoint, {
    headers: {
    Accept: "application/json"
    }
  })
  const data = await response.json()
  // turn loader off once data is fetched
  loader.classList.add("hidden");
  return data
}

async function handleClick() {
  //destructure fetchJoke so that it only returns the joke
  const { joke } = await fetchJoke()
  jokeHolder.textContent = joke
}

button.addEventListener('click', handleClick)
