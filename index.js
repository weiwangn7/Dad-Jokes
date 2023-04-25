const jokeEl = document.getElementById('joke');
const btn = document.getElementById('btn');

generateJoke();

btn.addEventListener('click', generateJoke);

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com/', config);
  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}

// function generateJoke() {
//   fetch('https://icanhazdadjoke.com/', {
//     headers: {
//       Accept: 'application/json',
//     },
//   })
//     .then(res => res.json())
//     .then(data => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
