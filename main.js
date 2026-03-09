document.querySelector('button').addEventListener('click', showImage)

function showImage(){
  fetch('https://picsum.photos/500.webp')
    .then(data => {
      console.log(data)
      document.querySelector('img').src = data.url
    })
}