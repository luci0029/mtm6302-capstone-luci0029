/*
const $form = document.getElementById('form')
const $date = document.getElementById('date')
const $apod = document.getElementById('apod')
const $search = document.getElementById('search')

const url = `https://api.nasa.gov/planetary/apod?api_key=gSl6i0vtGVVS0NsnCNofFFfJrBV8k1hD77sHrHbU`

fetch(url).then(response => response.json()).then(json=> $apod.innerHTML =                        
  `<img src="${json.ur}" alt="${json.title}">
    <h2>${json.title}</h2> 
    <h2>${json.date}</h2>
    <h2>${json.explanation}</h2>
    `) 



    const $form = document.getElementById('form')
    const $date = document.getElementById('date')
    
    $form.addEventListener('submit', async function (e) {
     e.preventDefault()
     const date = $date.value
      
     const url = `https://colors.zoodinkers.com/api?date=${date}`
     const response = await fetch(url)
     const json = await response.json()
     console.log(json)    
     
    })
*/



/*
function useApiData(data){
  document.querySelector('#imgx').innerHTML += `<img src="${data.url}">`
  document.querySelector('#fecha').innerHTML += data.date
  document.querySelector('#title').innerHTML += data.title
  document.querySelector('#explanation').innerHTML += data.explanation

}
*/

/*API INFO SHOWCASE*/
const $heart = document.getElementById('heart')
const $imgx = document.getElementById('imgx')
const $photo = document.querySelectorAll('.photo')
const $date = document.getElementById('date')
const $Calendar = document.getElementById('Calendar')

/**Api */

const data = {favorites: []}
const $fav_main = document.getElementById(`fav_main`)
function buildFavorites(){
  const html = []

  for (let i=0; i < data.favorites.length;i++) {
    const favorite = data.favorites[i]
    html.push(`<div>
      <h2>${favorite.title}</h2>
      <img src="${favorite.url}">
    </div>`)

    $fav_main.innerHTML = html.join('')
  }
  }

  function saveFavorites(){
    localStorage.setItem('apodFavorites', JSON.stringify(data.favorites))
  }

  function loadFavorites(){
    const storage = localStorage.getItem('apodFavorites')

    if(storage) {
      data.favorites = JSON.parse(storage)
    }
  }

  /**Api calendar n fetching info */

const form = document.querySelector('form').addEventListener('submit', async function(event){
  event.preventDefault()

  const date = $date.value

  const url = `https://api.nasa.gov/planetary/apod?api_key=2kJtplxmuoSIgIZAeQqJv3r2cejcrJ3vpjeiLKFq&date=${date}`
  const response = await fetch(url)
  const json = await response.json()
    data.apod = json
    json.date = $date.value
    console.log(json)


    document.querySelector('#imgx').innerHTML = `<div class="photo"> <img src="${json.url}" alt="${json.url}"  class="photo">`
    document.querySelector('#fecha').innerHTML = json.date
    document.querySelector('#title').innerHTML = json.title
    document.querySelector('#explanation').innerHTML = json.explanation
 
  })

/**API img shows bigger */
    $imgx.addEventListener('click', function (event) {
      const $photo = event.target.closest('.photo')

      console.log($imgx)

      if ($photo) {
        $photo.classList.toggle('appear')
        $photo.classList.toggle('scale')
      }
    
   })

   //calendar max date
  const today = new Date()
  const todayArray = [
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  ]

  const todayDate = todayArray.join('-')

  console.log(todayArray)

  console.log()
  date.max = new Date().toLocaleDateString("en-ca");


  


   const heartbutton = document.getElementById('heartbutton');
   heartbutton.addEventListener('click', function() {
    heartbutton.classList.toggle('like');
    
    data.favorites.push(data.apod)
    saveFavorites()
    buildFavorites()
    console.log(heartbutton);

   })


    const removefav = document.querySelector('.favs_remove');

   function createBtn(removefav){
    const remove = document.getElementById('remove')
    removefav.className = 'icon_remove'
    removefav.appendChild(remove)
   }

   for(let i=0; i <removefav.length;i++){
    createBtn(favs_remove[i])

}
   


  

 
    
     loadFavorites()
     buildFavorites()










