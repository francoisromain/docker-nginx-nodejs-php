// This is the client script

const url = 'http://localhost:8000/api'
const $clientList = document.getElementById('client-list')
const createNode = element => document.createElement(element)
const append = (parent, el) => parent.appendChild(el)

const htmlListCreate = json => {
  const ul = createNode('ul')
  json.map(entry => {
    let li = createNode('li')
    let img = createNode('img')
    let p = createNode('p')
    img.src = entry.img
    p.innerHTML = entry.name + ': ' + entry.value
    append(li, img)
    append(li, p)
    append(ul, li)
  })
  return ul
}

fetch(url)
  .then(data => data.json())
  .then(json => {
    console.log(json)
    append($clientList, htmlListCreate(json))
  })
  .catch(error => console.log(error))