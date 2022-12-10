const form = document.querySelector('.form');
const book = document.querySelector('#book');
const chapter = document.querySelector('#chapter');
const verse = document.querySelector('#verse');
const translation = document.querySelector('#translation');
const section = document.querySelector('section');

const displayData = (event) => {
  // event.preventDefault();
  section.textContent = ''
  const div = document.createElement('div');
  div.textContent = ''
  const reference = document.createElement('h1');
  const para1 = document.createElement('p');
  reference.textContent = event.reference;
  // eslint-disable-next-line prefer-destructuring
  para1.textContent = event.verses[0].text;
  div.appendChild(reference);
  div.appendChild(para1);
  section.appendChild(div)
  console.log(event);
};

const fetchData = (event) => {
  event.preventDefault();
  let baseUrl = `https://bible-api.com/${book.value} ${chapter.value}:${verse.value}`;
  if (translation.value !== '') {
    baseUrl = `${baseUrl}?translation=${translation.value}`;
  }

  fetch(baseUrl)
    .then((response) => response.json())
    .then((result) => displayData(result))
    .catch((error) => console.error(`We have encountared: ${error.message}`));

  form.reset();
};

form.addEventListener('submit', fetchData);
