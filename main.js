const btn = document.createElement('button')
btn.setAttribute('id', 'btn')
btn.textContent = 'Get Heroes'
document.body.appendChild(btn)
const wrapper = document.createElement('div')
wrapper.setAttribute('class', 'wrapper')
document.body.appendChild(wrapper)
const loader = () => {
    const gif = document.createElement('img')
    gif.setAttribute('class', 'gif')
    gif.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921')
    document.body.appendChild(gif)
}
const getHeroes = async () => {
    const data = await fetch('https://hp-api.onrender.com/api/characters')
    .then(res => res.json())
    .then(data => data)
    const dataWithImgs = data.filter((el)=>el.image)
    for (let i = 0; i < dataWithImgs.length;i++){
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        const addName = document.createElement('div')
        addName.setAttribute('class', 'name')
        addName.textContent = dataWithImgs[i].name
        const addActor = document.createElement('div')
        addActor.textContent = dataWithImgs[i].actor
        const addHouse = document.createElement('div')
        addHouse.setAttribute('class', 'house')
        addHouse.textContent = dataWithImgs[i].house
        const addBirth = document.createElement('div')
        addBirth.textContent = dataWithImgs[i].yearOfBirth
        const addImg = document.createElement('img')
        addImg.setAttribute('class', 'image')
        addImg.setAttribute('src', dataWithImgs[i].image)
        card.appendChild(addImg)
        card.appendChild(addName)
        card.appendChild(addActor)
        card.appendChild(addHouse)
        card.appendChild(addBirth)
        wrapper.appendChild(card)
        btn.removeEventListener('click', getHeroes)
    }
    console.log(dataWithImgs);
}
btn.addEventListener('click', ,setTimeout(getHeroes, 3000))