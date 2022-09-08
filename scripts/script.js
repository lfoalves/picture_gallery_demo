import { gallery, form, inputSearch, buttonSubmit } from '../scripts/elements.js';
const client_id = 'String more 35 caracteres';

function createGallery(data) {
  data.forEach(element => {
    let image = document.createElement('img')
    image.setAttribute('src', element.urls.small)
    gallery.append(image);
  });
}

function queryGallery(data) {
  gallery.innerHTML = '';
  createGallery(data.results)
}

fetch(`https://api.unsplash.com/photos/?client_id=${client_id}`)
.then(response => response.json())
.then(data => {
  createGallery(data)
})
.catch(err => console.log(err))



function queryImages() {
  console.log('Button Submit')

  if (inputSearch.value == '') {
    return alert('Por favor preencha o campo de pesquisa.')
  }
  
  const url = `https://api.unsplash.com/search/photos?page=1&query=${inputSearch.value}`;
  fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Client-ID ${client_id}`,
    }
  })
  .then(response => response.json())
  .then(data => {
    queryGallery(data)
  })
  .catch(err => console.log(err))
}

buttonSubmit.addEventListener('click', queryImages)