const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json';
const key = 'hBB9c023ujHsB9BiM4YgHVhYzLhIO2nF';
const unordered = document.querySelector('.unordered');

const displayData = (data) => {
  const title = document.createElement('h1');
  
  
  title.textContent = data.status;
  const data1 = data.results.books;
  data1.map((item) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'listItem');
    const image = document.createElement('img');
    image.setAttribute('class', 'image');
    const description = document.createElement('p');
    const tag = document.createElement('a');
    description.textContent = item.description;
    if (item.book_image !== '') {
      image.src = item.book_image;
    }
    listItem.appendChild(image);
    listItem.appendChild(description);
    unordered.appendChild(listItem);
  });
};

const fetchdata = () => {
  const baseUrl = `${url}?api-key=${key}`;
  fetch(baseUrl)
    .then((response) => response.json())
    .then((test) => displayData(test))
    .catch((error) => console.error(`We have encoutared: ${error.message}`))
}

window.addEventListener('DOMContentLoaded', fetchdata);