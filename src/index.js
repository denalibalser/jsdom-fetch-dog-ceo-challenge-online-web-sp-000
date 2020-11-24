console.log('%c HI', 'color: firebrick')


function fetchImg() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(json => renderImg(json));
    
  }

  function renderImg(json) {
      const div = document.querySelector('#dog-image-container')
      json.forEach(img => {
          const li = document.createElement('li')
          li.innerHTML =  `<li>${img}</li>`
          div.appendChild(li)
      })
  }

document.addEventListener('DOMContentLoaded', () => {
    fetchImg();
});

